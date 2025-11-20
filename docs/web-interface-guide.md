# Web Interface Guide

## 🌐 Amazon FBA Research Hub - Web Interface

A modern, user-friendly web application for managing your Amazon product research.

---

## Getting Started

### 1. Start the Web App

From the project root:
```bash
npm run web
```

The app will start at **http://localhost:3000**

### 2. Open in Your Browser

Navigate to http://localhost:3000 in Chrome, Safari, or any modern browser.

---

## Features

### ✅ Create Product Kits
- Fill out the simple form with:
  - **Product Name** (e.g., "fuzzy-socks")
  - **Category** (e.g., "Home & Kitchen")
  - **Selling Method** (FBA, POD, OA, or RA)
- Click "Create Product Kit"
- All templates are generated automatically

### ✅ View Your Products
- All products appear in a list on the left
- See creation date and file count
- Click any product to view its files

### ✅ Edit Files Directly
- Click any file tab to view its contents
- Click "Edit" to make changes
- Click "Save" to update the file
- All changes are saved to your local files

### ✅ Supported File Types
- **Markdown (.md)** - README, checklists, notes
- **CSV (.csv)** - Spreadsheets (margin calculator, niche comparison)
- **Text files** - Any other research files

---

## Workflow Example

### Step 1: Create a Product Kit
1. Enter product name: `coffee-grinder`
2. Select category: `Home & Kitchen`
3. Select method: `FBA`
4. Click "Create Product Kit"

### Step 2: Fill Out Research
1. Click your new product in the list
2. Click `validation-checklist.md`
3. Click "Edit"
4. Fill in your research data from Helium 10
5. Click "Save"

### Step 3: Calculate Margins
1. Click `margin-calculator.csv`
2. Click "Edit"
3. Update the numbers (selling price, costs, etc.)
4. Click "Save"

### Step 4: Make a Decision
1. Click `README.md`
2. Scroll to "Decision" section
3. Mark ✅ PROCEED, ⚠️ HOLD, or ❌ REJECT
4. Save your decision

---

## Tips for Parents

### Easy Navigation
- **Left side** = Create new products + product list
- **Right side** = View and edit files
- **Tabs at top** = Switch between files

### No Terminal Needed!
Everything you need is in the web interface:
- Create product kits
- Edit files
- View all your research
- No commands to remember

### Files Are Saved Locally
All your edits save directly to your computer in the `products/` folder. You can:
- Open them in Excel (CSV files)
- Open them in any text editor
- Back them up to cloud storage
- Share them with family

---

## Keyboard Shortcuts

- **Click product** = View its files
- **Click file tab** = Switch to that file
- **Edit button** = Start editing
- **Esc** = Cancel editing (coming soon)

---

## Troubleshooting

### App Won't Start
**Error:** "Cannot find module..."
**Fix:** Run `npm install` from the root folder and `cd web && npm install`

### Port Already in Use
**Error:** "Port 3000 is already in use"
**Fix:** Stop the other process using port 3000, or edit `web/package.json` to use a different port

### Files Not Showing
**Fix:** Refresh the page (Cmd+R or Ctrl+R)

### Can't Save Edits
**Fix:** Make sure the file isn't open in another program (Excel, TextEdit, etc.)

---

## Advanced Features (Coming Soon)

- [ ] Drag-and-drop image upload
- [ ] Markdown preview (formatted view)
- [ ] CSV table editor (spreadsheet view)
- [ ] Export to PDF
- [ ] Share products via link
- [ ] Bulk product creation

---

## Technical Details

**Built with:**
- Next.js 14 (React framework)
- TypeScript (type-safe code)
- Tailwind CSS (modern styling)
- File system API (local file editing)

**No database required!** Everything is stored as files on your computer.

---

## Questions?

- **Can I use this offline?** Yes! It runs locally on your computer.
- **Will it work on my iPad?** Yes, if you run it on your Mac and access via the network URL.
- **Can two people edit at once?** Not recommended - files could overwrite each other.
- **Is my data private?** Yes! Nothing is sent to the internet. All data stays on your computer.

---

**Ready to start?** Run `npm run web` and open http://localhost:3000! 🚀
