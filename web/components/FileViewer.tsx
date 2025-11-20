'use client';

import { useState, useEffect } from 'react';

interface Product {
  name: string;
  path: string;
  created: string;
  files: string[];
}

interface FileViewerProps {
  product: Product;
  selectedFile: string | null;
  onFileSelect: (fileName: string) => void;
}

interface FileContent {
  name: string;
  content: string;
  type: string;
}

export default function FileViewer({ product, selectedFile, onFileSelect }: FileViewerProps) {
  const [fileContent, setFileContent] = useState<FileContent | null>(null);
  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editedContent, setEditedContent] = useState('');
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (selectedFile) {
      loadFile(selectedFile);
    } else if (product.files.length > 0) {
      // Auto-select README.md if it exists, otherwise first file
      const defaultFile = product.files.find(f => f === 'README.md') || product.files[0];
      onFileSelect(defaultFile);
    }
  }, [selectedFile, product, onFileSelect]);

  const loadFile = async (fileName: string) => {
    setLoading(true);
    setEditing(false);
    try {
      const res = await fetch(`/api/products/${product.name}/${fileName}`);
      const data = await res.json();
      setFileContent(data);
      setEditedContent(data.content);
    } catch (error) {
      console.error('Error loading file:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!selectedFile) return;
    setSaving(true);
    try {
      await fetch(`/api/products/${product.name}/${selectedFile}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: editedContent }),
      });
      setFileContent(prev => prev ? { ...prev, content: editedContent } : null);
      setEditing(false);
    } catch (error) {
      console.error('Error saving file:', error);
    } finally {
      setSaving(false);
    }
  };

  const getFileIcon = (fileName: string) => {
    if (fileName.endsWith('.md')) {
      return (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" />
          <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
        </svg>
      );
    } else if (fileName.endsWith('.csv')) {
      return (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
        </svg>
      );
    }
    return (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
      </svg>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* File Tabs */}
      <div className="border-b border-gray-200 bg-gray-50">
        <div className="flex space-x-1 overflow-x-auto p-2">
          {product.files.map((file) => (
            <button
              key={file}
              onClick={() => onFileSelect(file)}
              className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md whitespace-nowrap transition-colors ${
                selectedFile === file
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              {getFileIcon(file)}
              {file}
            </button>
          ))}
        </div>
      </div>

      {/* File Content */}
      <div className="p-6">
        {loading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        ) : fileContent ? (
          <div>
            {/* Toolbar */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {fileContent.name}
              </h3>
              <div className="flex gap-2">
                {!editing ? (
                  <button
                    onClick={() => setEditing(true)}
                    className="px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                  >
                    Edit
                  </button>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        setEditing(false);
                        setEditedContent(fileContent.content);
                      }}
                      className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSave}
                      disabled={saving}
                      className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors disabled:opacity-50"
                    >
                      {saving ? 'Saving...' : 'Save'}
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Content */}
            {editing ? (
              <textarea
                value={editedContent}
                onChange={(e) => setEditedContent(e.target.value)}
                className="w-full h-96 p-4 font-mono text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <pre className="w-full p-4 bg-gray-50 border border-gray-200 rounded-md overflow-x-auto text-sm whitespace-pre-wrap font-mono">
                {fileContent.content}
              </pre>
            )}
          </div>
        ) : (
          <div className="text-center py-12 text-gray-500">
            Select a file to view
          </div>
        )}
      </div>
    </div>
  );
}
