export default function GraphicsCategory() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Category Header */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-4">Graphics</h1>
          <p className="text-lg opacity-90">
            Discover high-quality graphics, illustrations, icons, and visual elements for your creative projects
          </p>
          <div className="mt-4 text-sm opacity-80">
            2,847 products available
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className="w-64 bg-white p-6 rounded-lg shadow-sm h-fit">
            <h3 className="text-lg font-semibold mb-4">Refine Results</h3>
            
            {/* Graphic Type Filter */}
            <div className="mb-6">
              <h4 className="font-medium mb-2">Type</h4>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Icons
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Illustrations
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Logos
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Patterns
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Backgrounds
                </label>
              </div>
            </div>

            {/* Style Filter */}
            <div className="mb-6">
              <h4 className="font-medium mb-2">Style</h4>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Minimalist
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Vintage
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Modern
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Hand-drawn
                </label>
              </div>
            </div>

            {/* Format Filter */}
            <div className="mb-6">
              <h4 className="font-medium mb-2">Format</h4>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  SVG
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  PNG
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  AI
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  PSD
                </label>
              </div>
            </div>

            <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
              Apply Filters
            </button>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-semibold">Graphics Collection</h2>
                <p className="text-gray-600">Premium graphics for your creative projects</p>
              </div>
              <select className="p-2 border rounded">
                <option>Most Popular</option>
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <div className="aspect-square bg-gradient-to-br from-purple-100 to-blue-100 relative">
                    <div className="absolute top-2 left-2 bg-purple-500 text-white px-2 py-1 rounded text-xs">
                      Graphics
                    </div>
                    <div className="absolute top-2 right-2">
                      <button className="p-1 bg-white rounded-full shadow-sm">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium mb-2">Graphic Pack {i + 1}</h3>
                    <p className="text-sm text-gray-600 mb-2">by Creative Studio</p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-purple-600">${(Math.random() * 30 + 10).toFixed(2)}</span>
                      <div className="flex items-center">
                        <div className="flex text-yellow-400 text-xs">★★★★★</div>
                        <span className="text-xs text-gray-500 ml-1">(128)</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}