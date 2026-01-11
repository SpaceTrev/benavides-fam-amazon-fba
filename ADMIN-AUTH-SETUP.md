# Admin Authentication Setup

This project now includes authentication protection for the admin/tools section.

## Default Credentials

- **Email**: `admin@futurekind.com`
- **Password**: `admin123`

⚠️ **IMPORTANT**: Change these credentials before deploying to production!

## Changing Admin Credentials

### Option 1: Using Environment Variables (Recommended)

1. Generate a password hash:
```bash
node -e "console.log(require('bcryptjs').hashSync('YOUR_NEW_PASSWORD', 10))"
```

2. Update your `.env.local` file:
```env
ADMIN_EMAIL=your-email@example.com
ADMIN_PASSWORD_HASH=your-generated-hash-here
```

### Option 2: Directly in Code

Edit `web/auth.ts` and update the `ADMIN_USERS` array.

## Environment Variables

Create a `.env.local` file in the `web` directory:

```env
AUTH_SECRET=your-generated-secret-here
AUTH_URL=http://localhost:3000
ADMIN_EMAIL=admin@futurekind.com
ADMIN_PASSWORD_HASH=your-bcrypt-hash-here
```

Generate a new `AUTH_SECRET`:
```bash
openssl rand -base64 32
```

## Production Deployment

For Vercel deployment:

1. Go to your project settings on Vercel
2. Navigate to Environment Variables
3. Add the following variables:
   - `AUTH_SECRET` (your generated secret)
   - `AUTH_URL` (your production URL, e.g., `https://yourdomain.com`)
   - `ADMIN_EMAIL` (your admin email)
   - `ADMIN_PASSWORD_HASH` (your bcrypt password hash)

## Access Control

- **Public**: Homepage (`/`)
- **Protected**: Admin dashboard (`/admin`)
- **Login**: `/login`

The middleware automatically redirects unauthenticated users trying to access `/admin` to the login page.

## Adding Multiple Admins

To add multiple admin users, edit the `ADMIN_USERS` array in `web/auth.ts`:

```typescript
const ADMIN_USERS = [
  {
    id: '1',
    email: 'admin1@futurekind.com',
    passwordHash: 'hash1',
    name: 'Admin One'
  },
  {
    id: '2',
    email: 'admin2@futurekind.com',
    passwordHash: 'hash2',
    name: 'Admin Two'
  }
];
```
