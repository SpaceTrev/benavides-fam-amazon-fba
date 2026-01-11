import { NextRequest, NextResponse } from 'next/server';
import { getProductByName, getFile, updateFile, initDatabase } from '@/lib/db';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ product: string; file: string }> }
) {
  try {
    await initDatabase();
    
    const { product, file } = await params;

    const productRecord = await getProductByName(product);
    if (!productRecord) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      );
    }

    const fileRecord = await getFile(productRecord.id, file);
    if (!fileRecord) {
      return NextResponse.json(
        { error: 'File not found' },
        { status: 404 }
      );
    }

    // Determine content type
    const ext = file.split('.').pop()?.toLowerCase();
    let contentType = 'text/plain';
    if (ext === 'md') contentType = 'text/markdown';
    else if (ext === 'csv') contentType = 'text/csv';
    else if (ext === 'json') contentType = 'application/json';

    return NextResponse.json({
      name: fileRecord.filename,
      content: fileRecord.content,
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
    await initDatabase();

    const { product, file } = await params;
    const body = await request.json();

    const productRecord = await getProductByName(product);
    if (!productRecord) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      );
    }

    const updatedFile = await updateFile(productRecord.id, file, body.content);
    if (!updatedFile) {
      return NextResponse.json(
        { error: 'File not found' },
        { status: 404 }
      );
    }

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
