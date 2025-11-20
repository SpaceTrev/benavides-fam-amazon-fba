import { NextRequest, NextResponse } from 'next/server';
import * as fs from 'fs';
import * as path from 'path';

const rootDir = path.join(process.cwd(), '..');
const productsDir = path.join(rootDir, 'products');
const templatesDir = path.join(rootDir, 'templates', 'product-research');

interface CreateProductKitBody {
  product: string;
  category?: string;
  method?: string;
}

function sanitizeProductName(name: string): string {
  return name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

function copyAndPopulateTemplate(
  templateName: string,
  outputPath: string,
  replacements: Record<string, string>
) {
  const templatePath = path.join(templatesDir, templateName);
  
  if (!fs.existsSync(templatePath)) {
    throw new Error(`Template not found: ${templateName}`);
  }

  let content = fs.readFileSync(templatePath, 'utf8');

  // Replace all placeholders
  Object.entries(replacements).forEach(([key, value]) => {
    const placeholder = new RegExp(`{{${key}}}`, 'g');
    content = content.replace(placeholder, value);
  });

  fs.writeFileSync(outputPath, content, 'utf8');
}

export async function POST(request: NextRequest) {
  try {
    const body: CreateProductKitBody = await request.json();
    
    if (!body.product) {
      return NextResponse.json(
        { error: 'Product name is required' },
        { status: 400 }
      );
    }

    const productName = sanitizeProductName(body.product);
    const category = body.category || 'Home & Kitchen';
    const method = body.method || 'FBA';
    const productDir = path.join(productsDir, productName);

    // Check if product already exists
    if (fs.existsSync(productDir)) {
      return NextResponse.json(
        { error: `Product "${productName}" already exists` },
        { status: 409 }
      );
    }

    // Create products directory if needed
    if (!fs.existsSync(productsDir)) {
      fs.mkdirSync(productsDir, { recursive: true });
    }

    // Create product directory
    fs.mkdirSync(productDir, { recursive: true });

    // Prepare replacements
    const now = new Date().toISOString().split('T')[0];
    const replacements = {
      PRODUCT_NAME: productName,
      DATE: now,
      CATEGORY: category,
      METHOD: method,
    };

    // Copy templates
    const templates = [
      { template: 'research-summary.md', output: 'README.md' },
      { template: 'validation-checklist.md', output: 'validation-checklist.md' },
      { template: 'niche-comparison.csv', output: 'niche-comparison.csv' },
      { template: 'margin-calculator.csv', output: 'margin-calculator.csv' },
      { template: 'notes.md', output: 'notes.md' },
    ];

    const createdFiles: string[] = [];

    templates.forEach(({ template, output }) => {
      const outputPath = path.join(productDir, output);
      copyAndPopulateTemplate(template, outputPath, replacements);
      createdFiles.push(output);
    });

    // Create .gitkeep
    fs.writeFileSync(path.join(productDir, '.gitkeep'), '', 'utf8');

    return NextResponse.json({
      success: true,
      product: productName,
      category,
      method,
      path: productDir,
      files: createdFiles,
    });

  } catch (error) {
    console.error('Error creating product kit:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
