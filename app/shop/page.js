"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Shop() {
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    categories: [],
    price: '',
    license: '',
    format: []
  });

  // Sample product data inspired by the Envato layout
  const products = [
    { id: 1, title: "Modern Business Presentation", author: "DesignStudio", price: 24, image: "📊", category: "After Effects", downloads: "12.5k", rating: 4.9 },
    { id: 2, title: "Social Media Kit", author: "CreativePro", price: 18, image: "📱", category: "Graphics", downloads: "8.3k", rating: 4.8 },
    { id: 3, title: "Logo Animation Pack", author: "MotionDesign", price: 32, image: "⚡", category: "After Effects", downloads: "15.2k", rating: 4.9 },
    { id: 4, title: "Website Template Bundle", author: "WebStudio", price: 45, image: "🎨", category: "Templates", downloads: "6.7k", rating: 4.7 },
    { id: 5, title: "Brand Identity Kit", author: "BrandingCo", price: 28, image: "🎭", category: "Graphics", downloads: "9.1k", rating: 4.8 },
    { id: 6, title: "Typography Collection", author: "TypeMaster", price: 22, image: "🔤", category: "Fonts", downloads: "11.4k", rating: 4.9 },
    { id: 7, title: "Video Intro Templates", author: "VideoHub", price: 35, image: "🎬", category: "After Effects", downloads: "13.8k", rating: 4.8 },
    { id: 8, title: "Podcast Intro Pack", author: "AudioDesign", price: 16, image: "🎙️", category: "Audio", downloads: "7.2k", rating: 4.6 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Digital Templates</h1>
              <p className="text-gray-600">Download professional templates and create stunning designs.</p>
            </div>
            <Link href="/signup" className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors">
              Get unlimited downloads
            </Link>
          </div>
          
          {/* Search and Filter Bar */}
          <div className="flex items-center gap-4 mb-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search templates..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <svg className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.414A1 1 0 013 6.707V4z" />
              </svg>
              All Items
            </button>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500">Filter by:</span>
            <div className="flex gap-2">
              {['Business', 'Presentations', 'Logo', 'Intro', 'Social Media'].map((filter) => (
                <button key={filter} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors">
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Sidebar Filters */}
          <div className="w-64 flex-shrink-0">
            <div className="bg-white rounded-lg p-4 mb-4">
              <h3 className="font-semibold text-gray-900 mb-3">Categories</h3>
              <div className="space-y-2">
                {[
                  { name: 'Graphics', count: '2,847', active: true },
                  { name: 'Templates', count: '1,423' },
                  { name: 'Fonts', count: '756' },
                  { name: 'Themes', count: '432' },
                  { name: 'Video', count: '1,892' },
                  { name: 'Audio', count: '645' },
                ].map((category) => (
                  <label key={category.name} className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-1 rounded">
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        defaultChecked={category.active}
                        className="mr-2 text-blue-600" 
                      />
                      <span className={`text-sm ${category.active ? 'font-medium text-blue-600' : 'text-gray-700'}`}>
                        {category.name}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500">{category.count}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 mb-4">
              <h3 className="font-semibold text-gray-900 mb-3">Price Range</h3>
              <div className="space-y-2">
                {[
                  { label: 'Free', count: '1,234' },
                  { label: '$1 - $10', count: '2,845' },
                  { label: '$10 - $50', count: '1,567' },
                  { label: '$50+', count: '432' }
                ].map((price) => (
                  <label key={price.label} className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-1 rounded">
                    <div className="flex items-center">
                      <input type="radio" name="price" className="mr-2 text-blue-600" />
                      <span className="text-sm text-gray-700">{price.label}</span>
                    </div>
                    <span className="text-xs text-gray-500">{price.count}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-3">File Format</h3>
              <div className="space-y-2">
                {['PSD', 'AI', 'PNG', 'SVG', 'JPG', 'PDF'].map((format) => (
                  <label key={format} className="flex items-center cursor-pointer hover:bg-gray-50 p-1 rounded">
                    <input type="checkbox" className="mr-2 text-blue-600" />
                    <span className="text-sm text-gray-700">{format}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <span className="text-gray-600">Sort by:</span>
                <select className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Popular</option>
                  <option>Newest</option>
                  <option>Best Selling</option>
                  <option>Trending</option>
                </select>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-500">5,078 templates</span>
                <div className="flex border border-gray-300 rounded-lg">
                  <button 
                    onClick={() => setViewMode('grid')}
                    className={`p-2 ${viewMode === 'grid' ? 'bg-gray-100' : ''}`}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </button>
                  <button 
                    onClick={() => setViewMode('list')}
                    className={`p-2 ${viewMode === 'list' ? 'bg-gray-100' : ''}`}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 8a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 12a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1'}`}>
              {products.map((product) => (
                <div key={product.id} className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-200">
                  <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-4xl">
                    {product.image}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 flex items-center justify-center">
                      <button className="opacity-0 group-hover:opacity-100 bg-white text-gray-900 px-4 py-2 rounded-lg font-medium transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                        Preview
                      </button>
                    </div>
                    <div className="absolute top-3 right-3">
                      <button className="p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">by {product.author}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-gray-900">${product.price}</span>
                        <span className="text-xs text-gray-500">{product.downloads} downloads</span>
                      </div>
                      
                      <div className="flex items-center gap-1">
                        <div className="flex text-yellow-400">
                          {'★'.repeat(5)}
                        </div>
                        <span className="text-xs text-gray-500 ml-1">({product.rating})</span>
                      </div>
                    </div>
                    
                    <button className="w-full mt-3 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="bg-white border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                Load more templates
              </button>
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center mt-8 gap-2">
              <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              {[1, 2, 3, '...', 15].map((page, index) => (
                <button
                  key={index}
                  className={`px-3 py-2 border rounded-lg ${
                    page === 1 
                      ? 'bg-blue-600 text-white border-blue-600' 
                      : 'border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {page}
                </button>
              ))}
              
              <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}