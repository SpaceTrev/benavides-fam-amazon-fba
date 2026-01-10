# Vercel Deployment Guide

## Overview

This repository has a monorepo structure with a Next.js application located in the `web/` subdirectory. The Vercel deployment has been configured to properly build and deploy the Next.js app.

## Configuration

The repository includes a `vercel.json` configuration file at the root that tells Vercel:
- Where to install dependencies (`cd web && npm install`)
- How to build the application (`cd web && npm run build`)
- Where the build output is located (`web/.next`)

## Deployment Setup Options

You have two options for deploying this application to Vercel:

### Option 1: Use vercel.json Configuration (Recommended)

The existing `vercel.json` file at the root of the repository is already configured to handle the monorepo structure. Simply:

1. Connect your repository to Vercel
2. Deploy as normal - Vercel will use the configuration from `vercel.json`

### Option 2: Set Root Directory in Vercel Dashboard

Alternatively, you can configure Vercel to treat the `web` directory as the root:

1. Go to your project settings in Vercel
2. Navigate to "General" → "Build & Development Settings"
3. Set "Root Directory" to `web`
4. Leave other settings at their defaults (Vercel will auto-detect Next.js)

## Troubleshooting

### Error: "No Next.js version detected"

If you see this error, it means Vercel is looking for Next.js in the wrong directory. Solutions:

1. **Verify vercel.json exists** at the repository root with the correct configuration
2. **Check that web/package.json** includes `next` in dependencies
3. **Set Root Directory** in Vercel dashboard to `web` (Option 2 above)

### Build Fails

If the build fails:

1. Check that dependencies are properly installed in `web/package.json`
2. Verify the build works locally: `cd web && npm install && npm run build`
3. Check Vercel build logs for specific error messages

## Local Testing

To test the build locally:

```bash
# Install dependencies
cd web
npm install

# Build the application
npm run build

# Start production server
npm start
```

## Environment Variables

If your application requires environment variables, add them in:
- Vercel Dashboard: Project Settings → Environment Variables
- Local development: Create `web/.env.local`

## Questions?

See the main [README.md](README.md) for general project information.
