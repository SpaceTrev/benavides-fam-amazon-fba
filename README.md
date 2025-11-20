# Amazon FBA Business Automation Tools

A lean, automated system for running an Amazon side business with **minimal manual work** and **maximum profit**.

---

## 🎯 What This Repo Does

This repository contains automation tools to help you:

- ✅ **Research products faster** with standardized templates
- ✅ **Validate profitability** with built-in calculators
- ✅ **Create listings efficiently** with content templates
- ✅ **Track your launch** with 30-day action plans
- ✅ **Make data-driven decisions** using business playbooks

Everything is designed for **side hustlers** who want to build a profitable Amazon business without drowning in manual work.

---

## 📚 Business Methods Supported

This repo supports **4 low-inventory Amazon selling methods**:

| Method | Startup Cost | Inventory | Profit Margin | Best For |
|--------|--------------|-----------|---------------|----------|
| **POD** (Print-on-Demand) | $100–500 | Zero | 30–60% | Custom designs, zero risk |
| **OA** (Online Arbitrage) | $300–1,000 | Minimal | 15–35% | Finding deals online |
| **RA** (Retail Arbitrage) | $200–500 | Minimal | 20–40% | Local store clearance |
| **FBA** (Small test batches) | $1,000–3,000 | 100–300 units | 25–45% | Validated products, scaling |

**Goal:** Start with $100–500, validate with test batches, scale only what works.

---

## 🚀 Quick Start (5 Minutes)

### Option A: Web Interface (Recommended for Non-Technical Users)

1. **Install Node.js**
   - Download from https://nodejs.org (LTS version)
   - Run installer and verify: `node --version`

2. **Install Dependencies**
   ```bash
   cd benavides-fam-amazon-fba
   npm install
   cd web && npm install && cd ..
   ```

3. **Start the Web App**
   ```bash
   npm run web
   ```
   Then open http://localhost:3000 in your browser

4. **Use the Visual Interface**
   - Fill out the "Create New Product Kit" form
   - Click "Create Product Kit"
   - Select your product from the list
   - View and edit files directly in the browser

### Option B: Command Line (For Developers)

1. **Install Dependencies**
   ```bash
   cd benavides-fam-amazon-fba
   npm install
   ```

2. **Create Product Kit**
   ```bash
   npm run create-product-kit -- --product "fuzzy-socks"
   ```

**You'll get:**
```
products/fuzzy-socks/
├── README.md                 # Research summary
├── validation-checklist.md   # 9-point validation
├── niche-comparison.csv      # Compare products
├── margin-calculator.csv     # Profit calculator
└── notes.md                  # Freeform notes
```

### Step 4: Start Researching
1. Open `products/fuzzy-socks/validation-checklist.md`
2. Use Helium 10 or SellerAmp to fill in the data
3. Use `margin-calculator.csv` to verify profitability

**When validation passes**, create listing content:
```bash
npm run create-listing-pack -- --product "fuzzy-socks"
```

---

## 🛠️ Available Tools

### 1. `create-product-kit`
**What it does:** Generates a research folder for a new product idea.

**Usage:**
```bash
npm run create-product-kit -- --product "product-name"
npm run create-product-kit -- --product "coffee-grinder" --category "Home & Kitchen" --method "FBA"
```

**Options:**
- `--product` (required): Product name (e.g., "fuzzy-socks")
- `--category` (optional): Amazon category (default: "Home & Kitchen")
- `--method` (optional): POD, OA, RA, or FBA (default: "FBA")

**Output:** Complete research folder with validation checklist, margin calculator, and notes.

---

### 2. `create-listing-pack` *(Coming Soon)*
**What it does:** Generates templates for writing an Amazon listing.

**Usage:**
```bash
npm run create-listing-pack -- --product "fuzzy-socks" --keywords "fuzzy socks,warm socks,cozy socks"
```

**Output:** Title, bullets, description, backend keywords, and image shot list.

---

### 3. `generate-action-plan` *(Coming Soon)*
**What it does:** Creates a 30-day week-by-week action plan.

**Usage:**
```bash
npm run generate-action-plan -- --product "fuzzy-socks" --method "FBA" --budget 15
```

**Output:** Week-by-week checklist for launching your product.

---

### 4. `calculate-margins` *(Coming Soon)*
**What it does:** Interactive CLI calculator for profit after all Amazon fees.

**Usage:**
```bash
npm run calculate-margins
```

**Output:** Net profit, net margin %, with all fees included (referral, FBA, storage, ads).

---

## 📁 Repo Structure

```
benavides-fam-amazon-fba/
│
├── README.md                      # This file
├── package.json                   # Node.js dependencies
├── tsconfig.json                  # TypeScript config
│
├── docs/                          # Written guides for non-technical users
│   ├── 00-getting-started.md     # How to use this repo
│   └── 01-business-playbook.md   # Amazon FBA business guide (coming soon)
│
├── templates/                     # Reusable templates
│   └── product-research/
│       ├── validation-checklist.md
│       ├── research-summary.md
│       ├── niche-comparison.csv
│       ├── margin-calculator.csv
│       └── notes.md
│
├── config/                        # Business settings
│   ├── fees.json                 # Amazon fee assumptions
│   ├── margins.json              # Target margins by method
│   └── tools.json                # Tool costs (Helium 10, Keepa, etc.)
│
├── tools/                         # Automation scripts
│   ├── create-product-kit.ts     # ✅ Implemented
│   ├── create-listing-pack.ts    # 🔜 Coming soon
│   ├── generate-action-plan.ts   # 🔜 Coming soon
│   └── calculate-margins.ts      # 🔜 Coming soon
│
└── products/                      # Generated product research folders
    └── (created by scripts)
```

---

## 📖 Documentation

### For Parents (Non-Technical)
1. **[Getting Started Guide](docs/00-getting-started.md)** – How to use these tools (step-by-step)
2. **Business Playbook** *(coming soon)* – Complete Amazon FBA strategy guide

### For Developers
- All automation scripts are in `/tools`
- Templates are in `/templates`
- Config files in `/config` drive calculations
- TypeScript + Node.js for easy modification

---

## 💡 Example Workflow

### Week 1: Research
```bash
# Create research kit
npm run create-product-kit -- --product "fuzzy-socks"

# Fill out validation checklist using Helium 10
# Use margin calculator to verify 25%+ net margin
```

### Week 2: Sourcing
- Contact 3 suppliers (Alibaba, wholesale, or POD)
- Order 1-2 test samples
- Verify quality

### Week 3: Listing
```bash
# Generate listing templates
npm run create-listing-pack -- --product "fuzzy-socks" --keywords "fuzzy socks,warm socks"

# Write title, bullets, description
# Create 6-9 product images
# Publish listing on Amazon
```

### Week 4: Launch
```bash
# Generate action plan
npm run generate-action-plan -- --product "fuzzy-socks" --method "FBA" --budget 15

# Launch PPC campaign ($15/day)
# Monitor daily: impressions, clicks, sales
# Optimize after 7 days
```

### Month 2: Optimize & Scale
- Review 30-day data
- Scale up if profitable (10-20 sales, 25%+ margin, 4+ star reviews)
- Pivot if not hitting targets
- Launch next product

---

## 🎓 Business Philosophy

### Principles
1. **Validate before scaling** – Test with 10-50 units, not 500
2. **Data over gut** – Use Helium 10, Keepa, SellerAmp
3. **Lean inventory** – Prefer POD/OA/RA over bulk orders
4. **Automate repetitive work** – Templates, checklists, scripts
5. **Track everything** – Spreadsheets, not memory

### Target Metrics
- **Net margin:** 25%+ after all fees
- **Monthly sales:** 300+ units/month
- **Weight:** <2 lbs (lower FBA fees)
- **Price:** $15–75 (impulse purchase range)
- **Competition:** Top 3 sellers control <70% market share

---

## 🔧 Configuration

### Amazon Fees (config/fees.json)
Referral fees, FBA fees, storage fees by category and size.

**Example:**
```json
{
  "categories": {
    "Home & Kitchen": {
      "referral_fee_pct": 15
    }
  },
  "fba_fees": {
    "standard_size": {
      "large_1lb_to_2lb": 4.75
    }
  }
}
```

### Target Margins (config/margins.json)
Business targets by selling method.

**Example:**
```json
{
  "target_net_margin_pct": 25,
  "min_acceptable_margin_pct": 20,
  "margin_by_method": {
    "FBA_batch": {
      "typical_margin_pct": 35,
      "range": "25-45%"
    }
  }
}
```

---

## 🚨 Important Warnings

### ❌ Don't Do This
- **Dropship from AliExpress** – Violates Amazon policy, account suspension
- **Sell gated products without approval** – Beauty, Baby, Health, Jewelry require authorization
- **Skip validation** – Products that "seem obvious" are usually saturated
- **Underestimate fees** – Use calculators religiously (referral + FBA + storage + ads)
- **Overspend on inventory** – Test with 10-50 units first

### ✅ Do This
- Use your own branding on invoices/packaging
- Maintain 4+ star reviews
- Respond to customer messages within 24 hours
- Monitor PPC weekly (pause losers, scale winners)
- Keep invoices/receipts for all sourcing

---

## 📊 Realistic Expectations

### Month 1-3: Foundation
- **Goal:** 10–30 sales, validate niche
- **Revenue:** $200–1,000 (breakeven or small loss)
- **Time:** 10–15 hours/week

### Month 3-6: Optimization
- **Goal:** 50–200 sales/month across 2-3 products
- **Revenue:** $1,000–5,000/month ($300–1,500 profit)

### Month 6-12: Scaling
- **Goal:** 200–500 sales/month across 4-8 products
- **Revenue:** $5,000–15,000/month ($1,500–5,000 profit)

---

## 🤝 Contributing

This repo is for the Benavides family Amazon business. If you find bugs or want to suggest improvements, open an issue or submit a PR.

---

## 📝 License

MIT License – feel free to adapt for your own use.

---

## 📞 Support

Questions? Check:
1. [Getting Started Guide](docs/00-getting-started.md)
2. Research guide: `amazon-fba-research-results.md`
3. Ask Trevor

---

**Ready to launch your first product?** Run:
```bash
npm run create-product-kit -- --product "your-product-name"
```
