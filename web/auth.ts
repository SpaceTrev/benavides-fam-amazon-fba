import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod';
import bcrypt from 'bcryptjs';

// Define your admin credentials here
// In production, store these in environment variables
const ADMIN_USERS = [
  {
    id: '1',
    email: process.env.ADMIN_EMAIL || 'admin@futurekind.com',
    // Default password: 'admin123' - CHANGE THIS IN PRODUCTION
    passwordHash: process.env.ADMIN_PASSWORD_HASH || '$2a$10$7YZ5sKQJmNPe/VQx5vYjZOHPqq7L8K8F8eJzJfNmXhKQlPnlz5bTW',
    name: 'Admin'
  }
];

async function getUser(email: string): Promise<typeof ADMIN_USERS[0] | undefined> {
  return ADMIN_USERS.find(user => user.email === email);
}

export const { auth, signIn, signOut, handlers } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);
          
          if (!user) return null;
          
          const passwordsMatch = await bcrypt.compare(password, user.passwordHash);

          if (passwordsMatch) {
            return {
              id: user.id,
              email: user.email,
              name: user.name,
            };
          }
        }

        console.log('Invalid credentials');
        return null;
      },
    }),
  ],
});
