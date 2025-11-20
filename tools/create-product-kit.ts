#!/usr/bin/env node

/**
 * create-product-kit.ts
 * 
 * Generates a standardized folder structure for researching a new Amazon product.
 * 
 * Usage:
 *   npm run create-product-kit -- --product "fuzzy-socks"
 *   npm run create-product-kit -- --product "coffee-grinder" --category "Home & Kitchen" --method "FBA"
 */

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

// Get current directory (ES modules don't have __dirname)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Parse command-line arguments
const argv = yargs(hideBin(process.argv))
  .option('product', {
    alias: 'p',
    type: 'string',
    description: 'Product name (e.g., "fuzzy-socks")',
    demandOption: true,
  })
  .option('category', {
    alias: 'c',
    type: 'string',
    description: 'Amazon category (e.g., "Home & Kitchen")',
    default: 'Home & Kitchen',
  })
  .option('method', {
    alias: 'm',
    type: 'string',
    description: 'Selling method: POD, OA, RA, FBA',
    default: 'FBA',
    choices: ['POD', 'OA', 'RA', 'FBA'],
  })
  .help()
  .parseSync();

// Sanitize product name for folder creation
const productName = argv.product.toLowerCase().replace(/\s+/g, '-');
const category = argv.category;
const method = argv.method;

// Define paths
const rootDir = path.join(__dirname, '..');
const productsDir = path.join(rootDir, 'products');
const productDir = path.join(productsDir, productName);
const templatesDir = path.join(rootDir, 'templates', 'product-research');

// Check if product folder already exists
if (fs.existsSync(productDir)) {
  console.error(`❌ Error: Product folder already exists at ${productDir}`);
  console.error(`   Delete it first or choose a different product name.`);
  process.exit(1);
}

// Create products directory if it doesn't exist
if (!fs.existsSync(productsDir)) {
  fs.mkdirSync(productsDir, { recursive: true });
}

// Create product directory
fs.mkdirSync(productDir, { recursive: true });

// Helper function to copy and populate template
function copyAndPopulateTemplate(templateName: string, outputName: string) {
  const templatePath = path.join(templatesDir, templateName);
  const outputPath = path.join(productDir, outputName);

  if (!fs.existsSync(templatePath)) {
    console.error(`⚠️  Warning: Template not found: ${templatePath}`);
    return;
  }

  let content = fs.readFileSync(templatePath, 'utf8');

  // Replace placeholders
  const now = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
  content = content.replace(/{{PRODUCT_NAME}}/g, productName);
  content = content.replace(/{{DATE}}/g, now);
  content = content.replace(/{{CATEGORY}}/g, category);
  content = content.replace(/{{METHOD}}/g, method);

  fs.writeFileSync(outputPath, content, 'utf8');
}

// Copy templates
console.log(`\n🚀 Creating product research kit for: ${productName}\n`);

const templates = [
  { template: 'research-summary.md', output: 'README.md' },
  { template: 'validation-checklist.md', output: 'validation-checklist.md' },
  { template: 'niche-comparison.csv', output: 'niche-comparison.csv' },
  { template: 'margin-calculator.csv', output: 'margin-calculator.csv' },
  { template: 'notes.md', output: 'notes.md' },
];

templates.forEach(({ template, output }) => {
  copyAndPopulateTemplate(template, output);
  console.log(`✅ Created: ${output}`);
});

// Create a .gitkeep to preserve the folder structure
fs.writeFileSync(path.join(productDir, '.gitkeep'), '', 'utf8');

console.log(`\n✨ Product kit created successfully!\n`);
console.log(`📁 Location: ${productDir}\n`);
console.log(`📋 Next steps:`);
console.log(`   1. Open the folder: cd ${productDir}`);
console.log(`   2. Fill out validation-checklist.md using Helium 10 or SellerAmp`);
console.log(`   3. Use margin-calculator.csv to verify profitability`);
console.log(`   4. Update README.md with your research findings\n`);
console.log(`🎯 When ready, create listing content:`);
console.log(`   npm run create-listing-pack -- --product "${productName}"\n`);
