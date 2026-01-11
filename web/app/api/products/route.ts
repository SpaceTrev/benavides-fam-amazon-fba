import { NextResponse } from 'next/server';
import { getAllProducts, getFilesByProduct, initDatabase } from '@/lib/db';

export async function GET() {
  try {
    // Initialize database
    await initDatabase();

    const products = await getAllProducts();

    // Get files for each product
    const productsWithFiles = await Promise.all(
      products.map(async (product) => {
        const files = await getFilesByProduct(product.id);
        return {
          name: product.name,
          path: `/products/${product.name}`,
          created: product.created_at,
          files: files.map(f => f.filename),
        };
      })
    );

    return NextResponse.json({ products: productsWithFiles });

  } catch (error) {
    console.error('Error listing products:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
