# 🔐 Quick Reference: Admin Access

## Access the Admin Dashboard

**URL:** http://localhost:3000/admin (local) or https://futurekindmsc.com/admin (production)

## Default Login Credentials

```
Email:    admin@futurekind.com
Password: admin123
```

⚠️ **CHANGE THESE BEFORE DEPLOYING TO PRODUCTION!**

## Quick Setup for Production

### 1. Generate Auth Secret
```bash
openssl rand -base64 32
```

### 2. Generate Password Hash
```bash
cd web
node -e "console.log(require('bcryptjs').hashSync('your-new-password', 10))"
```

### 3. Add to Vercel Environment Variables

Go to Vercel → Project → Settings → Environment Variables:

```
AUTH_SECRET=<result-from-step-1>
AUTH_URL=https://futurekindmsc.com
ADMIN_EMAIL=your-admin-email@example.com
ADMIN_PASSWORD_HASH=<result-from-step-2>
```

### 4. Redeploy

Changes will take effect after the next deployment.

## Testing Locally

1. Server is running at http://localhost:3000
2. Visit http://localhost:3000/admin
3. You'll be redirected to login
4. Use the default credentials above
5. After login, you'll access the admin tools

## What's Protected?

- ✅ `/admin` - Product research tools (protected)
- ✅ `/api/products/*` - API endpoints (protected by admin session)
- 🌍 `/` - Public homepage (accessible to everyone)
- 🔑 `/login` - Login page (public)

## Troubleshooting

### "Invalid credentials" error
- Check that you're using the correct email and password
- If you changed credentials, make sure to restart the dev server
- Check the `.env.local` file has the correct values

### Redirected to login after successful login
- Check that `AUTH_SECRET` is set in `.env.local`
- Make sure `AUTH_URL` matches your domain
- Clear browser cookies and try again

### Changes not taking effect
- Restart the dev server: `npm run dev` in the `web` directory
- Clear browser cache
- Check the terminal for any error messages

## Documentation

- **Setup Guide:** [ADMIN-AUTH-SETUP.md](./ADMIN-AUTH-SETUP.md)
- **Implementation Details:** [AUTHENTICATION-SUMMARY.md](./AUTHENTICATION-SUMMARY.md)
- **Deployment Guide:** [VERCEL-DEPLOYMENT.md](./VERCEL-DEPLOYMENT.md)

## Need to Add More Admins?

Edit `web/auth.ts` and add to the `ADMIN_USERS` array:

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

Generate password hashes for each user using the command in step 2 above.
