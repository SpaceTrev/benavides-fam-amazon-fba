import { NextRequest, NextResponse } from 'next/server';
import { createProduct, createFile, initDatabase } from '@/lib/db';
import * as path from 'path';
import * as fs from 'fs';

const templatesDir = path.join(process.cwd(), '..', 'templates', 'product-research');

interface CreateProductKitBody {
  product: string;
  category?: string;
  method?: string;
}

function sanitizeProductName(name: string): string {
  return name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

function loadTemplate(templateName: string, replacements: Record<string, string>): string {
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

  return content;
}

export async function POST(request: NextRequest) {
  try {
    // Initialize database (creates tables if needed)
    await initDatabase();

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

    // Create product in database
    const product = await createProduct(productName, category, method);

    // Prepare replacements
    const now = new Date().toISOString().split('T')[0];
    const replacements = {
      PRODUCT_NAME: productName,
      DATE: now,
      CATEGORY: category,
      METHOD: method,
    };

    // Template definitions
    const templates = [
      { template: 'research-summary.md', output: 'README.md' },
      { template: 'validation-checklist.md', output: 'validation-checklist.md' },
      { template: 'niche-comparison.csv', output: 'niche-comparison.csv' },
      { template: 'margin-calculator.csv', output: 'margin-calculator.csv' },
      { template: 'notes.md', output: 'notes.md' },
    ];

    const createdFiles: string[] = [];

    // Create files in database
    for (const { template, output } of templates) {
      const content = loadTemplate(template, replacements);
      await createFile(product.id, output, content);
      createdFiles.push(output);
    }

    return NextResponse.json({
      success: true,
      product: productName,
      category,
      method,
      files: createdFiles,
    });

  } catch (error: any) {
    console.error('Error creating product kit:', error);
    
    // Handle duplicate product error
    if (error.message?.includes('duplicate key')) {
      return NextResponse.json(
        { error: `Product already exists` },
        { status: 409 }
      );
    }
    
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
