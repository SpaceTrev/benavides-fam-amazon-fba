-- Create products table
CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) UNIQUE NOT NULL,
  category VARCHAR(255) NOT NULL DEFAULT 'Home & Kitchen',
  method VARCHAR(50) NOT NULL DEFAULT 'FBA',
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

-- Create files table
CREATE TABLE IF NOT EXISTS files (
  id SERIAL PRIMARY KEY,
  product_id INTEGER NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  filename VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
  UNIQUE(product_id, filename)
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_files_product_id ON files(product_id);
CREATE INDEX IF NOT EXISTS idx_products_name ON products(name);
