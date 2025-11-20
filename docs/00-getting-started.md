# Getting Started with Your Amazon FBA Business Tools

Welcome! This guide will help you use the automation tools in this repository to run your Amazon business more efficiently.

## What This Repo Does

This repository contains **automation scripts** that help you:
- Research new products faster
- Create organized folders for each product idea
- Generate listing content templates
- Calculate profit margins accurately
- Track your 30-day launch plan

Everything is designed to **save you time** and **reduce manual work**.

---

## Step 1: One-Time Setup (Do this first!)

### Install Node.js
1. Go to https://nodejs.org
2. Download the **LTS version** (Long Term Support)
3. Run the installer and follow the instructions
4. Verify it worked:
   - Open **Terminal** (on Mac: press `Cmd+Space`, type "Terminal")
   - Type: `node --version`
   - You should see something like `v20.10.0`

### Install Dependencies
1. Open Terminal
2. Navigate to this folder:
   ```bash
   cd ~/Space/benavides-fam-amazon-fba
   ```
3. Install required packages:
   ```bash
   npm install
   ```
   This will take 1-2 minutes. You'll see a progress bar.

**You only need to do this once!**

---

## Step 2: Using the Tools

### Tool #1: Create a Product Research Kit

**What it does:** Creates a complete folder with templates for researching a new product.

**When to use it:** Every time you find a product idea you want to evaluate.

**How to run it:**

```bash
npm run create-product-kit -- --product "fuzzy-socks"
```

**What you'll get:**
A new folder: `products/fuzzy-socks/` containing:
- Research summary template
- Validation checklist (9 criteria)
- Margin calculator spreadsheet
- Notes file

**Options:**
```bash
# Specify category and selling method
npm run create-product-kit -- --product "coffee-grinder" --category "Home & Kitchen" --method "FBA"

# Available methods: POD, OA, RA, FBA
```

---

### Tool #2: Create a Listing Content Pack

**What it does:** Generates templates for writing your Amazon product listing.

**When to use it:** After you've validated a product and are ready to create the listing.

**How to run it:**

```bash
npm run create-listing-pack -- --product "fuzzy-socks" --keywords "fuzzy socks,warm socks,cozy socks"
```

**What you'll get:**
A `listing/` folder inside your product folder with:
- Title template (200 characters)
- 5 bullet points (benefit-focused)
- Description template
- Backend keywords
- Image shot list (9 required images)

---

### Tool #3: Generate a 30-Day Action Plan

**What it does:** Creates a week-by-week checklist for launching your product.

**When to use it:** After you've decided to move forward with a product.

**How to run it:**

```bash
npm run generate-action-plan -- --product "fuzzy-socks" --method "FBA" --budget 15
```

**What you'll get:**
A file: `products/fuzzy-socks/action-plan.md` with:
- Week 1: Setup tasks
- Week 2: Sourcing tasks
- Week 3: Listing creation
- Week 4: Launch and PPC

---

### Tool #4: Calculate Profit Margins

**What it does:** Interactive calculator that shows your profit after ALL Amazon fees.

**When to use it:** When evaluating if a product is profitable enough.

**How to run it:**

```bash
npm run calculate-margins
```

You'll be asked:
- Selling price
- Product cost
- Weight
- Category
- Expected advertising cost (ACoS %)

It will show you:
- Referral fees
- FBA fees
- Storage fees
- Ad costs
- **Net profit per unit**
- **Net margin %**

---

## Step 3: Your First Product Research

Let's walk through researching your first product:

### Example: Fuzzy Socks

1. **Create the research kit:**
   ```bash
   npm run create-product-kit -- --product "fuzzy-socks" --method "FBA"
   ```

2. **Open the folder:**
   - Navigate to `products/fuzzy-socks/`
   - Open `validation-checklist.md`

3. **Do your research** using Helium 10 or SellerAmp:
   - Fill in the checklist (monthly sales, price, competition, etc.)
   - Use the margin calculator CSV to track costs

4. **If it passes validation**, create listing templates:
   ```bash
   npm run create-listing-pack -- --product "fuzzy-socks" --keywords "fuzzy socks,warm socks,cozy socks"
   ```

5. **Generate your action plan:**
   ```bash
   npm run generate-action-plan -- --product "fuzzy-socks" --method "FBA" --budget 15
   ```

6. **Follow the action plan** week by week!

---

## Common Questions

### Q: What if I get an error?
**A:** Most errors mean you forgot to run `npm install` first. Try that, then run the command again.

### Q: Can I edit the templates after they're created?
**A:** Yes! All files are Markdown (.md) or CSV. Open them in any text editor or Excel.

### Q: What if I want to research multiple products?
**A:** Run `create-product-kit` for each one. Each gets its own folder in `products/`.

### Q: Where should I store my Helium 10 data?
**A:** Copy-paste it into the CSV files in your product's research folder.

### Q: Can I delete a product folder?
**A:** Yes, just delete the folder in `products/`. It won't break anything.

---

## Next Steps

1. Read the business playbook: `docs/01-business-playbook.md`
2. Set up your tools (Helium 10, Keepa, SellerAmp): `docs/02-tools-setup.md`
3. Follow the phase guides in `docs/03-phase-guides/`

**Questions?** Ask Trevor or check `docs/99-faq-troubleshooting.md`
