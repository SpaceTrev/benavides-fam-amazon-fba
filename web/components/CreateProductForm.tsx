'use client';

import { useState } from 'react';

interface CreateProductFormProps {
  onProductCreated: () => void;
}

export default function CreateProductForm({ onProductCreated }: CreateProductFormProps) {
  const [product, setProduct] = useState('');
  const [category, setCategory] = useState('Home & Kitchen');
  const [method, setMethod] = useState('FBA');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      const res = await fetch('/api/products/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ product, category, method }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to create product');
      }

      setSuccess(`Created product kit for "${data.product}"!`);
      setProduct('');
      onProductCreated();

      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Create New Product Kit
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-1">
            Product Name *
          </label>
          <input
            type="text"
            id="product"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            placeholder="e.g., fuzzy-socks"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option>Home & Kitchen</option>
            <option>Toys & Games</option>
            <option>Sports & Outdoors</option>
            <option>Office Products</option>
            <option>Pet Supplies</option>
            <option>Arts & Crafts</option>
            <option>Health & Household</option>
            <option>Clothing & Accessories</option>
          </select>
        </div>

        <div>
          <label htmlFor="method" className="block text-sm font-medium text-gray-700 mb-1">
            Selling Method
          </label>
          <select
            id="method"
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="FBA">FBA (Fulfillment by Amazon)</option>
            <option value="POD">POD (Print on Demand)</option>
            <option value="OA">OA (Online Arbitrage)</option>
            <option value="RA">RA (Retail Arbitrage)</option>
          </select>
        </div>

        {error && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-md">
            <p className="text-sm text-red-800">{error}</p>
          </div>
        )}

        {success && (
          <div className="p-3 bg-green-50 border border-green-200 rounded-md">
            <p className="text-sm text-green-800">{success}</p>
          </div>
        )}

        <button
          type="submit"
          disabled={loading || !product}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? 'Creating...' : 'Create Product Kit'}
        </button>
      </form>
    </div>
  );
}
