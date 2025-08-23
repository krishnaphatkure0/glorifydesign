import { Suspense } from 'react';

function SearchResults({ searchParams }) {
  const query = searchParams?.q || '';
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {query ? `Search results for "${query}"` : 'Search Results'}
          </h1>
          
          {/* Search Bar */}
          <div className="flex bg-white rounded-lg shadow-sm overflow-hidden max-w-2xl">
            <input 
              type="text" 
              defaultValue={query}
              placeholder="Search for graphics, templates, fonts..." 
              className="flex-1 px-4 py-3 outline-none"
            />
            <button className="bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className="w-64 bg-white p-6 rounded-lg shadow-sm h-fit">
            <h3 className="text-lg font-semibold mb-4">Filter Results</h3>
            
            {/* Category Filter */}
            <div className="mb-6">
              <h4 className="font-medium mb-2">Category</h4>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Graphics (1,247)</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Templates (892)</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Fonts (156)</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Themes (89)</span>
                </label>
              </div>
            </div>

            {/* Price Filter */}
            <div className="mb-6">
              <h4 className="font-medium mb-2">Price</h4>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="radio" name="price" className="mr-2" />
                  <span className="text-sm">Free</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="price" className="mr-2" />
                  <span className="text-sm">$1 - $10</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="price" className="mr-2" />
                  <span className="text-sm">$10 - $50</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="price" className="mr-2" />
                  <span className="text-sm">$50+</span>
                </label>
              </div>
            </div>

            {/* File Format */}
            <div className="mb-6">
              <h4 className="font-medium mb-2">Format</h4>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">PSD</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">AI</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">SVG</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">PNG</span>
                </label>
              </div>
            </div>

            {/* License */}
            <div className="mb-6">
              <h4 className="font-medium mb-2">License</h4>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Commercial</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Personal Only</span>
                </label>
              </div>
            </div>

            <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
              Apply Filters
            </button>
          </div>

          {/* Results */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex justify-between items-center mb-6 bg-white p-4 rounded-lg shadow-sm">
              <div>
                <p className="text-gray-600">
                  {query ? `Found 2,384 results for "${query}"` : 'Showing all products'}
                </p>
                <div className="flex gap-2 mt-2">
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
                    business ×
                  </span>
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
                    template ×
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <select className="p-2 border rounded">
                  <option>Relevance</option>
                  <option>Most Popular</option>
                  <option>Newest</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Best Rating</option>
                </select>
                <div className="flex gap-1">
                  <button className="p-2 border rounded bg-blue-50 border-blue-200">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </button>
                  <button className="p-2 border rounded">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 8a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 12a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Search Results Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 relative">
                    <div className="absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 rounded text-xs">
                      {['Graphics', 'Template', 'Font', 'Theme'][i % 4]}
                    </div>
                    <div className="absolute top-2 right-2">
                      <button className="p-1 bg-white rounded-full shadow-sm">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                    </div>
                    {/* Search Match Indicator */}
                    {query && i < 5 && (
                      <div className="absolute bottom-2 left-2 bg-yellow-400 text-yellow-800 px-2 py-1 rounded text-xs font-medium">
                        Best Match
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium mb-2">Search Result {i + 1}</h3>
                    <p className="text-sm text-gray-600 mb-2">by Creative Designer</p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-blue-600">${(Math.random() * 40 + 5).toFixed(2)}</span>
                      <div className="flex items-center">
                        <div className="flex text-yellow-400 text-xs">★★★★★</div>
                        <span className="text-xs text-gray-500 ml-1">({Math.floor(Math.random() * 200 + 50)})</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex items-center gap-2">
                <button className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-50">
                  Previous
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded">1</button>
                <button className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-50">2</button>
                <button className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-50">3</button>
                <span className="px-2">...</span>
                <button className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-50">15</button>
                <button className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-50">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* No Results State */}
        {query && query.length > 0 && false && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">No results found</h2>
            <p className="text-gray-600 mb-8">
              We couldn't find anything matching "{query}". Try adjusting your search terms.
            </p>
            <div className="space-y-2">
              <p className="text-sm text-gray-500">Suggestions:</p>
              <div className="flex justify-center gap-2 flex-wrap">
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-gray-200">
                  business templates
                </span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-gray-200">
                  logo design
                </span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-gray-200">
                  web graphics
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Search({ searchParams }) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center">Loading...</div>}>
      <SearchResults searchParams={searchParams} />
    </Suspense>
  );
}