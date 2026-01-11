import { sql } from '@vercel/postgres';

export interface Product {
  id: number;
  name: string;
  category: string;
  method: string;
  created_at: string;
}

export interface File {
  id: number;
  product_id: number;
  filename: string;
  content: string;
  updated_at: string;
}

export async function initDatabase() {
  // Create tables if they don't exist
  await sql`
    CREATE TABLE IF NOT EXISTS products (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) UNIQUE NOT NULL,
      category VARCHAR(255) NOT NULL DEFAULT 'Home & Kitchen',
      method VARCHAR(50) NOT NULL DEFAULT 'FBA',
      created_at TIMESTAMP NOT NULL DEFAULT NOW()
    )
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS files (
      id SERIAL PRIMARY KEY,
      product_id INTEGER NOT NULL REFERENCES products(id) ON DELETE CASCADE,
      filename VARCHAR(255) NOT NULL,
      content TEXT NOT NULL,
      updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
      UNIQUE(product_id, filename)
    )
  `;

  await sql`
    CREATE INDEX IF NOT EXISTS idx_files_product_id ON files(product_id)
  `;

  await sql`
    CREATE INDEX IF NOT EXISTS idx_products_name ON products(name)
  `;
}

export async function createProduct(name: string, category: string, method: string) {
  const result = await sql<Product>`
    INSERT INTO products (name, category, method)
    VALUES (${name}, ${category}, ${method})
    RETURNING *
  `;
  return result.rows[0];
}

export async function createFile(productId: number, filename: string, content: string) {
  const result = await sql<File>`
    INSERT INTO files (product_id, filename, content)
    VALUES (${productId}, ${filename}, ${content})
    ON CONFLICT (product_id, filename)
    DO UPDATE SET content = ${content}, updated_at = NOW()
    RETURNING *
  `;
  return result.rows[0];
}

export async function getAllProducts() {
  const result = await sql<Product>`
    SELECT * FROM products
    ORDER BY created_at DESC
  `;
  return result.rows;
}

export async function getProductByName(name: string) {
  const result = await sql<Product>`
    SELECT * FROM products
    WHERE name = ${name}
    LIMIT 1
  `;
  return result.rows[0] || null;
}

export async function getFilesByProduct(productId: number) {
  const result = await sql<File>`
    SELECT * FROM files
    WHERE product_id = ${productId}
    ORDER BY filename
  `;
  return result.rows;
}

export async function getFile(productId: number, filename: string) {
  const result = await sql<File>`
    SELECT * FROM files
    WHERE product_id = ${productId} AND filename = ${filename}
    LIMIT 1
  `;
  return result.rows[0] || null;
}

export async function updateFile(productId: number, filename: string, content: string) {
  const result = await sql<File>`
    UPDATE files
    SET content = ${content}, updated_at = NOW()
    WHERE product_id = ${productId} AND filename = ${filename}
    RETURNING *
  `;
  return result.rows[0] || null;
}
