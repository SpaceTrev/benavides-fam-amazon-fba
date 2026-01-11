# 🚀 Deploying Futurekind MSC to Vercel

This guide will help you deploy the Futurekind MSC website to Vercel and connect it to your futurekindmsc.com domain.

---

## Prerequisites

- ✅ GitHub repository with the code (you have this!)
- ✅ Domain purchased at GoDaddy (futurekindmsc.com)
- ⬜ Vercel account (we'll create this)

---

## Step 1: Create Vercel Account

1. Go to https://vercel.com
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"**
4. Authorize Vercel to access your GitHub account

---

## Step 2: Import Your Project

1. Once logged in, click **"Add New..."** → **"Project"**

2. Find your repository: `benavides-fam-amazon-fba`

3. Click **"Import"**

4. **IMPORTANT:** Configure the project settings:
   ```
   Framework Preset: Next.js
   Root Directory: web
   Build Command: npm run build
   Output Directory: (leave default)
   Install Command: npm install
   ```

5. Click **"Deploy"**

6. Wait 2-3 minutes for the first deployment to complete

7. You'll get a URL like: `https://benavides-fam-amazon-fba-xxxxx.vercel.app`

---

## Step 3: Test Your Deployment

1. Click the deployment URL
2. Verify the marketing site loads correctly
3. Check the `/tools` page works
4. Test on mobile by opening the URL on your phone

**If deployment fails:**
- Check the build logs in Vercel
- Make sure the Root Directory is set to `web`
- Try redeploying

---

## Step 4: Connect Your Domain (futurekindmsc.com)

### In Vercel:

1. Go to your project in Vercel
2. Click **"Settings"** → **"Domains"**
3. Click **"Add"**
4. Enter: `futurekindmsc.com`
5. Click **"Add"**
6. Also add: `www.futurekindmsc.com`
7. Click **"Add"**

Vercel will show you DNS records to add. Keep this page open!

### In GoDaddy:

1. Log into GoDaddy: https://dcc.godaddy.com
2. Go to **"My Products"** → **"Domains"**
3. Click on `futurekindmsc.com`
4. Click **"DNS"** → **"Manage Zones"** (or "DNS Management")

5. **Add A Record:**
   - Type: `A`
   - Name: `@`
   - Value: `76.76.21.21` (Vercel's IP - they'll show this)
   - TTL: `600` (or default)
   - Click **"Save"**

6. **Add CNAME for www:**
   - Type: `CNAME`
   - Name: `www`
   - Value: `cname.vercel-dns.com` (Vercel will show the exact value)
   - TTL: `600`
   - Click **"Save"**

7. **Remove conflicting records:**
   - Delete any existing A records for `@`
   - Delete any existing CNAME records for `www`
   - Delete any "Forwarding" or "Parking" records

---

## Step 5: Wait for DNS Propagation

- DNS changes can take **24-48 hours** to propagate worldwide
- Usually it's faster (1-4 hours)
- Check status at: https://dnschecker.org

**While waiting:**
- The site will still work at your Vercel URL
- You can continue working on the site
- Vercel will automatically issue an SSL certificate when DNS is ready

---

## Step 6: Verify SSL Certificate

Once DNS propagates:

1. Go to Vercel → Your Project → **"Domains"**
2. You should see a green checkmark ✓ next to both domains
3. Visit https://futurekindmsc.com
4. Verify the SSL lock icon appears in the browser
5. Test https://www.futurekindmsc.com too

---

## Step 7: Update Amazon Store Links

Before going live, update the placeholder Amazon links:

1. Find your Amazon Seller ID:
   - Go to Amazon Seller Central
   - Settings → Account Info
   - Copy your "Merchant Token" or "Seller ID"

2. Update the code:
   - Edit `web/app/page.tsx`
   - Find all instances of: `YOUR_STORE_ID`
   - Replace with your actual Seller ID

3. Commit and push:
   ```bash
   git add web/app/page.tsx
   git commit -m "Add Amazon store links"
   git push
   ```

4. Vercel will automatically redeploy (takes 2-3 minutes)

---

## Automatic Deployments

Vercel is now connected to your GitHub repository:

- **Every push to main** → Automatic production deployment
- **Every pull request** → Preview deployment
- You can see all deployments in the Vercel dashboard

This means you can update your site by:
1. Making changes to the code
2. Committing and pushing to GitHub
3. Vercel automatically deploys in 2-3 minutes

---

## Environment Variables

**IMPORTANT:** You must add these environment variables before deploying:

1. Vercel → Your Project → **"Settings"** → **"Environment Variables"**
2. Add the following variables:

### Required Authentication Variables:

| Variable Name | Description | Example Value |
|--------------|-------------|---------------|
| `AUTH_SECRET` | Secret for NextAuth session encryption | Generate: `openssl rand -base64 32` |
| `AUTH_URL` | Your production domain | `https://futurekindmsc.com` |
| `ADMIN_EMAIL` | Admin login email | `admin@futurekindmsc.com` |
| `ADMIN_PASSWORD_HASH` | Bcrypt password hash | Generate: `node -e "console.log(require('bcryptjs').hashSync('YOUR_PASSWORD', 10))"` |

### How to Generate Values:

**Generate AUTH_SECRET:**
```bash
openssl rand -base64 32
```

**Generate ADMIN_PASSWORD_HASH:**
```bash
cd web
node -e "console.log(require('bcryptjs').hashSync('your-secure-password', 10))"
```

### Optional Variables (if using Vercel Postgres):
- `POSTGRES_URL`
- `POSTGRES_PRISMA_URL`
- `POSTGRES_URL_NO_SSL`
- `POSTGRES_URL_NON_POOLING`

3. Click **"Save"**
4. Redeploy for changes to take effect

---

## Admin Access

After deploying with environment variables:

1. Visit: `https://futurekindmsc.com/admin`
2. You'll be redirected to the login page
3. Use your configured admin credentials
4. Access the product research tools

**Note:** The admin tools are now protected by authentication. Only users with valid credentials can access `/admin`.

For more details, see [`ADMIN-AUTH-SETUP.md`](./ADMIN-AUTH-SETUP.md) and [`AUTHENTICATION-SUMMARY.md`](./AUTHENTICATION-SUMMARY.md).

---

## Protecting the Admin Route (Already Implemented!)

~~The admin tools at `/tools` are currently public.~~ **UPDATE:** Admin authentication has been implemented!

- The tools are now at `/admin` instead of `/tools`
- Protected by NextAuth.js authentication
- Requires login with admin credentials
- Session-based security with bcrypt password hashing

To add more admins or change credentials, see [`ADMIN-AUTH-SETUP.md`](./ADMIN-AUTH-SETUP.md).

Now anyone accessing `/tools` will need the password.

### Option 3: Add Next.js Authentication (Advanced)

For full authentication with user accounts:
- Install NextAuth.js: https://next-auth.js.org
- Create login page
- Protect `/tools` route with middleware

---

## Monitoring and Analytics

### Vercel Analytics (Built-in)
- Go to Vercel → Your Project → **"Analytics"**
- See page views, visitors, and performance
- Free tier includes basic analytics

### Google Analytics (Optional)
1. Create account at https://analytics.google.com
2. Get your tracking ID
3. Add to `web/app/layout.tsx`:
   ```tsx
   <Script
     src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
     strategy="afterInteractive"
   />
   ```

---

## Troubleshooting

### Build Fails
**Error:** "Command failed with exit code 1"
- Check Vercel build logs
- Verify Root Directory is set to `web`
- Try running `npm run build` locally first

### Domain Not Working
**Error:** "Domain not found" or "ERR_NAME_NOT_RESOLVED"
- Wait longer (DNS can take 24-48 hours)
- Check DNS at https://dnschecker.org
- Verify you added the correct A and CNAME records in GoDaddy
- Make sure you deleted old/conflicting DNS records

### SSL Certificate Not Issuing
**Error:** "Not Secure" in browser
- Wait for DNS to fully propagate
- Vercel automatically issues SSL once DNS is verified
- Can take up to 24 hours after DNS propagates

### Site Loads But Missing Styles
**Error:** Page loads but looks broken
- Check browser console for errors
- Verify build completed successfully in Vercel
- Try clearing browser cache (Ctrl+Shift+R or Cmd+Shift+R)

---

## Cost

**Vercel:**
- ✅ FREE for hobby/personal projects
- Includes:
  - Unlimited deployments
  - 100GB bandwidth/month
  - Automatic SSL certificates
  - Global CDN
  - 100 hours of build time/month

**GoDaddy:**
- Domain: ~$12-20/year (you already have this)
- No hosting costs needed!

**Total Cost:** $0/month (just the domain renewal yearly)

---

## Next Steps After Deployment

1. [ ] Test site at futurekindmsc.com
2. [ ] Update Amazon store links
3. [ ] Add Google Analytics (optional)
4. [ ] Set up password protection for `/tools`
5. [ ] Share with your mom!
6. [ ] Start listing products on Amazon

---

## Need Help?

- **Vercel Docs:** https://vercel.com/docs
- **Vercel Support:** https://vercel.com/support
- **GoDaddy DNS Help:** https://www.godaddy.com/help/dns-management-19800

---

## Quick Commands

```bash
# Test build locally
npm run web:build

# Start development server
npm run web

# Deploy (Vercel does this automatically from GitHub)
# Just push to GitHub and Vercel deploys!
git push origin main
```

---

You're all set! Once DNS propagates, your site will be live at https://futurekindmsc.com 🎉
