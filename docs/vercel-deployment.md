# Deploying to Vercel with Postgres

## Quick Deploy (Recommended)

Just push to GitHub and use the Vercel CLI. Everything auto-configures.

### Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **GitHub Repository**: Push your code to GitHub

### Deploy in 3 Commands

```bash
# Install Vercel CLI globally
npm i -g vercel

# Navigate to web directory
cd web

# Login to Vercel (opens browser)
vercel login

# Deploy (first time setup)
vercel
```

Follow the prompts:
- **Set up and deploy?** → Yes
- **Which scope?** → Your account
- **Link to existing project?** → No
- **Project name?** → fba-automation (or whatever you want)
- **In which directory is your code?** → `./` (already in /web)
- **Want to modify settings?** → No

Vercel will:
1. Auto-detect Next.js
2. Build your app
3. Deploy to a preview URL

### Add Postgres Database

After first deploy, add database through CLI:

```bash
# Create Postgres database
vercel postgres create fba-products

# Link it to your project
vercel link

# Pull environment variables locally (optional, for local dev)
vercel env pull .env.local
```

Or add via dashboard:
1. Go to your project → **Storage** tab
2. Click **Create Database** → **Postgres**
3. Auto-connects to your project

### Initialize Database Schema

Run the schema SQL in Vercel:

```bash
# Option 1: Via Vercel CLI (if you have pg client)
vercel postgres sql < schema.sql

# Option 2: Via Vercel Dashboard
# 1. Go to Storage → Your database → Query tab
# 2. Copy/paste contents of web/schema.sql
# 3. Click Run
```

### Deploy to Production

```bash
vercel --prod
```

Done! You'll get a production URL like `https://fba-automation.vercel.app`

## Access Your App

Vercel gives you a URL: `https://your-project.vercel.app`

Share this with your parents. They can access it from anywhere.

## Custom Domain (Optional)

```bash
# Add custom domain via CLI
vercel domains add fba.yourfamily.com

# Or via dashboard: Settings → Domains
```

## Local Development

To test locally with production database:

```bash
# Pull environment variables
vercel env pull .env.local

# Start dev server
npm run dev
```

**Note**: This uses production data. For safer dev, create a separate database.

## Troubleshooting

### Database Connection Errors

If you see `POSTGRES_URL` errors:

1. Verify environment variables in Vercel dashboard:
   - Go to **Settings** → **Environment Variables**
   - Ensure all `POSTGRES_*` variables are present
2. Redeploy: **Deployments** → **…** → **Redeploy**

### Build Errors

Common issues:

- **TypeScript errors**: Run `npm run build` locally first
- **Missing dependencies**: Ensure `package.json` is in `/web` directory
- **Root directory**: Verify Vercel is set to use `web` as root

### Schema Not Initialized

If tables don't exist:

1. Go to Vercel dashboard → Your database → **Query**
2. Run:
   ```sql
   SELECT * FROM products;
   ```
3. If error "relation does not exist":
   - Copy `/web/schema.sql` contents
   - Run in Query tab

## Monitoring

- **Analytics**: Vercel dashboard → **Analytics**
- **Logs**: Vercel dashboard → **Deployments** → Select deployment → **Logs**
- **Database**: Vercel dashboard → **Storage** → Your database → **Data**

## Security Notes

- Vercel automatically uses HTTPS
- Database credentials are never exposed to client
- All API routes run server-side only
- Rate limiting is handled by Vercel

## Cost Estimation

**Vercel Free Tier includes**:
- Unlimited deployments
- 100 GB bandwidth/month
- Serverless function executions

**Vercel Postgres Free Tier**:
- 256 MB storage
- 60 compute hours/month
- Should be sufficient for side business use

If you exceed limits, Vercel will email you before charging.

## Next Steps

After deployment:

1. Test creating a product kit
2. Share URL with parents
3. Walk them through the interface
4. Monitor usage in Vercel dashboard
5. Consider custom domain for easier access
