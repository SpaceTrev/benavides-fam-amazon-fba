import { NextResponse } from 'next/server';
import * as fs from 'fs';
import * as path from 'path';

const rootDir = path.join(process.cwd(), '..');
const productsDir = path.join(rootDir, 'products');

interface Product {
  name: string;
  path: string;
  created: string;
  files: string[];
}

export async function GET() {
  try {
    if (!fs.existsSync(productsDir)) {
      return NextResponse.json({ products: [] });
    }

    const productFolders = fs.readdirSync(productsDir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);

    const products: Product[] = productFolders.map(name => {
      const productPath = path.join(productsDir, name);
      const stats = fs.statSync(productPath);
      const files = fs.readdirSync(productPath).filter(f => f !== '.gitkeep');

      return {
        name,
        path: productPath,
        created: stats.birthtime.toISOString(),
        files,
      };
    });

    // Sort by creation date, newest first
    products.sort((a, b) => new Date(b.created).getTime() - new Date(a.created).getTime());

    return NextResponse.json({ products });

  } catch (error) {
    console.error('Error listing products:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
