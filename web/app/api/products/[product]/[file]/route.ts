import { NextRequest, NextResponse } from 'next/server';
import * as fs from 'fs';
import * as path from 'path';

const rootDir = path.join(process.cwd(), '..');
const productsDir = path.join(rootDir, 'products');

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ product: string; file: string }> }
) {
  try {
    const { product, file } = await params;
    const filePath = path.join(productsDir, product, file);

    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: 'File not found' },
        { status: 404 }
      );
    }

    const content = fs.readFileSync(filePath, 'utf8');
    const ext = path.extname(file).toLowerCase();

    // Determine content type
    let contentType = 'text/plain';
    if (ext === '.md') contentType = 'text/markdown';
    else if (ext === '.csv') contentType = 'text/csv';
    else if (ext === '.json') contentType = 'application/json';

    return NextResponse.json({
      name: file,
      content,
      type: contentType,
    });

  } catch (error) {
    console.error('Error reading file:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ product: string; file: string }> }
) {
  try {
    const { product, file } = await params;
    const body = await request.json();
    const filePath = path.join(productsDir, product, file);

    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: 'File not found' },
        { status: 404 }
      );
    }

    fs.writeFileSync(filePath, body.content, 'utf8');

    return NextResponse.json({
      success: true,
      message: 'File updated successfully',
    });

  } catch (error) {
    console.error('Error updating file:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
