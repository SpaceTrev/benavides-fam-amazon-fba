# Futurekind MSC - Complete Setup Guide

This guide will help you set up the complete Futurekind MSC platform, including the marketing website and admin tools.

---

## 🎯 What's Been Built

### 1. **Marketing Website** (Public-Facing)
- **URL:** `/` (homepage)
- **Features:**
  - Beautiful landing page with your mission statement
  - "Why Choose Futurekind?" section highlighting quality, eco-consciousness, and value
  - Call-to-action buttons linking to your Amazon store
  - Professional design with blue/green gradient matching your brand
  - Mobile-responsive layout

### 2. **Admin Tools** (Internal Use)
- **URL:** `/tools`
- **Features:**
  - Product research kit generator
  - Validation checklists
  - Margin calculators
  - File management for product research
  - Easy navigation back to the marketing site

---

## 🚀 Quick Start (Running Locally)

### Step 1: Install Dependencies
```bash
cd benavides-fam-amazon-fba
npm install
cd web && npm install && cd ..
```

### Step 2: Start the Development Server
```bash
npm run web
```

The site will be available at `http://localhost:3000`

### Step 3: Build for Production
```bash
npm run web:build
```

---

## 🖼️ Adding Your Logo

### Option 1: Using the Provided Logo Image
1. Save your Futurekind logo image as `futurekind-logo.png`
2. Copy it to `/web/public/futurekind-logo.png`
3. Update the marketing page to use it:

```tsx
// In web/app/page.tsx, replace the text logo with:
<Image
  src="/futurekind-logo.png"
  alt="Futurekind MSC"
  width={320}
  height={160}
  priority
/>
```

### Option 2: Keep the Text Logo
The site currently uses a text-based logo that matches your brand colors:
- **Blue** for "Future"
- **Green** for "kind"

This works great and requires no additional setup!

---

## 🔗 Setting Up Your Amazon Store Link

### Find Your Amazon Seller ID
1. Go to your Amazon Seller Central
2. Click on "Settings" → "Account Info"
3. Look for your "Merchant Token" or "Seller ID"

### Update the Links
In `web/app/page.tsx`, replace all instances of:
```
https://amazon.com/s?me=YOUR_STORE_ID
```

With your actual store URL:
```
https://amazon.com/s?me=YOUR_ACTUAL_SELLER_ID
```

Or use your Amazon Brand Store URL if you have one:
```
https://www.amazon.com/stores/YOUR_BRAND_NAME/page/YOUR_PAGE_ID
```

---

## 🌐 Deploying to futurekindMSC.com

You have several options for hosting your website:

### Option 1: Vercel (Recommended - Free & Easy)

**Why Vercel?**
- Built by the creators of Next.js (what your site uses)
- Free tier is generous for small businesses
- Automatic deployments from GitHub
- Built-in SSL certificates
- Global CDN for fast loading

**Setup Steps:**

1. **Create a Vercel Account**
   - Go to https://vercel.com
   - Sign up with your GitHub account

2. **Connect Your Repository**
   - Click "Add New Project"
   - Import your GitHub repository
   - Select `benavides-fam-amazon-fba`
   - Set the root directory to `web`
   - Click "Deploy"

3. **Connect Your Domain (futurekindMSC.com)**
   - In your Vercel project, go to "Settings" → "Domains"
   - Add `futurekindmsc.com` and `www.futurekindmsc.com`
   - Vercel will give you DNS records to add

4. **Update GoDaddy DNS**
   - Log into GoDaddy
   - Go to your domain management for `futurekindmsc.com`
   - Add the DNS records Vercel provides:
     - **A Record:** Point to Vercel's IP (they'll provide this)
     - **CNAME Record:** Point `www` to your Vercel domain
   - Save changes (can take 24-48 hours to propagate)

5. **Done!** Your site will be live at https://futurekindmsc.com

---

### Option 2: Netlify (Alternative)

1. Sign up at https://netlify.com
2. Connect your GitHub repository
3. Set build command: `cd web && npm run build`
4. Set publish directory: `web/.next`
5. Connect your domain in Netlify's domain settings
6. Update DNS in GoDaddy with Netlify's records

---

### Option 3: GoDaddy Hosting (Not Recommended)

While you bought your domain from GoDaddy, their hosting isn't ideal for Next.js apps. Vercel or Netlify are better choices.

---

## 📝 Customization Guide

### Update Amazon Store Link
Search for `YOUR_STORE_ID` in the code and replace with your actual Amazon seller ID.

### Change Colors
The site uses a blue-green gradient. To customize:

1. Open `web/app/page.tsx`
2. Look for color classes like:
   - `from-blue-400` → Change to your preferred blue shade
   - `from-green-400` → Change to your preferred green shade
   - `bg-slate-900` → Change to your preferred dark background

### Add Products Section
To showcase specific products on the homepage:

```tsx
// Add this section to page.tsx
<section className="py-20 px-4">
  <h2 className="text-4xl font-bold text-white text-center mb-12">
    Featured Products
  </h2>
  <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {/* Add product cards here */}
  </div>
</section>
```

### Add Contact Form
Consider adding a contact form using:
- **Formspree** (free): https://formspree.io
- **EmailJS** (free): https://www.emailjs.com
- Built-in Amazon messaging (recommended)

---

## 🛠️ Using the Admin Tools

### Creating a Product Research Kit
```bash
npm run create-product-kit -- --product "reusable-water-bottle"
```

This generates:
- Research summary template
- Validation checklist (9-point system)
- Niche comparison spreadsheet
- Margin calculator
- Notes document

### Accessing the Web Interface
1. Start the server: `npm run web`
2. Navigate to `http://localhost:3000/tools`
3. Fill out the form to create new product kits
4. View and edit files directly in the browser

---

## 📊 Setting Up Amazon Seller Account (If Not Done)

### 1. Create Seller Central Account
- Go to https://sellercentral.amazon.com
- Choose "Individual" plan to start ($0.99 per sale) or "Professional" ($39.99/month)

### 2. Set Up Your Brand
- Register your brand name "Futurekind MSC" through Amazon Brand Registry
- This protects your brand and unlocks features like A+ Content and Sponsored Brands

### 3. Create Your First Listing
Use the tools in `/tools` to:
1. Research your product
2. Validate profitability
3. Generate listing content
4. Launch with confidence

### 4. Optimize for Search
- Use relevant keywords in titles and descriptions
- Get 5-10 reviews as quickly as possible
- Start with Amazon PPC at $10-15/day

---

## 🎨 Brand Assets

### Colors (from your logo)
- **Primary Blue:** `#4299E1` (rgb(66, 153, 225))
- **Primary Green:** `#48BB78` (rgb(72, 187, 120))
- **Dark Background:** `#0F172A` (rgb(15, 23, 42))

### Typography
The site uses system fonts for maximum compatibility:
- **Headings:** Bold, large sizes (4xl-7xl)
- **Body:** Regular weight, comfortable reading size (xl-2xl)

### Logo Usage
- Always maintain the "Future" (blue) + "kind" (green) color scheme
- Include "MSC LLC" subtitle when space allows
- Use on dark backgrounds for maximum impact

---

## 🚀 Next Steps

### Immediate (Week 1)
1. [ ] Save your logo to `/web/public/futurekind-logo.png`
2. [ ] Update Amazon store links in the code
3. [ ] Deploy to Vercel and connect your domain
4. [ ] Test the site on mobile and desktop

### Short-term (Month 1)
1. [ ] Add 3-5 featured products to the homepage
2. [ ] Set up Amazon Brand Registry
3. [ ] Create your first product listing using the tools
4. [ ] Launch your first product

### Long-term (Months 2-6)
1. [ ] Add customer testimonials to the marketing site
2. [ ] Create a blog section for sustainability tips
3. [ ] Expand product catalog
4. [ ] Set up email marketing (Mailchimp, ConvertKit)
5. [ ] Consider adding a newsletter signup

---

## 🔒 Security Best Practices

### Environment Variables
Never commit sensitive data to GitHub. Create a `.env.local` file:

```env
AMAZON_ACCESS_KEY=your_key_here
AMAZON_SECRET_KEY=your_secret_here
```

Add to `.gitignore`:
```
.env.local
.env
```

### Admin Access
The `/tools` route is currently public. To protect it:

1. Add authentication with [NextAuth.js](https://next-auth.js.org)
2. Or restrict access to specific IP addresses in Vercel settings
3. Or keep the URL private and only access it yourself

---

## 📞 Need Help?

### Technical Issues
- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind CSS Docs:** https://tailwindcss.com/docs
- **Vercel Support:** https://vercel.com/support

### Amazon Seller Support
- **Seller Central Help:** https://sellercentral.amazon.com/help
- **Seller Forums:** https://sellercentral.amazon.com/forums
- **Amazon Seller University:** Free courses and webinars

### FBA Resources
- See `amazon-fba-research-results.md` in this repo
- Check out YouTube channels: Jungle Scout, Helium 10, My Wife Quit Her Job

---

## 🎉 Congratulations!

You now have a professional marketing website and powerful admin tools for your Amazon FBA business.

**Your mom is going to do great!** 🌍💚

The site is designed to:
- Build trust with customers through a professional brand presence
- Make it easy to find products on Amazon
- Streamline product research and management behind the scenes

Good luck with Futurekind MSC! 🚀
