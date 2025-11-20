'use client';

import { useState, useEffect } from 'react';
import CreateProductForm from '@/components/CreateProductForm';
import ProductList from '@/components/ProductList';
import FileViewer from '@/components/FileViewer';

interface Product {
  name: string;
  path: string;
  created: string;
  files: string[];
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const res = await fetch('/api/products');
      const data = await res.json();
      setProducts(data.products || []);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleProductCreated = () => {
    fetchProducts();
  };

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
    setSelectedFile(null);
  };

  const handleFileSelect = (fileName: string) => {
    setSelectedFile(fileName);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Amazon FBA Research Hub
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                Manage your product research with ease
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500">
                {products.length} {products.length === 1 ? 'product' : 'products'}
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 space-y-6">
            <CreateProductForm onProductCreated={handleProductCreated} />
            <ProductList
              products={products}
              selectedProduct={selectedProduct}
              onProductSelect={handleProductSelect}
              loading={loading}
            />
          </div>

          <div className="lg:col-span-2">
            {selectedProduct ? (
              <FileViewer
                product={selectedProduct}
                selectedFile={selectedFile}
                onFileSelect={handleFileSelect}
              />
            ) : (
              <div className="bg-white rounded-lg shadow-md p-12 text-center">
                <div className="text-gray-400 mb-4">
                  <svg
                    className="mx-auto h-24 w-24"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No product selected
                </h3>
                <p className="text-gray-500">
                  Create a new product or select one from the list to view files
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      <footer className="mt-12 border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-gray-500">
            Amazon FBA Research Hub • Built for the Benavides Family
          </p>
        </div>
      </footer>
    </div>
  );
}
