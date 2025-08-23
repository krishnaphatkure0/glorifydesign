export default function FontsCategory() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Category Header */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-4">Fonts</h1>
          <p className="text-lg opacity-90">
            Premium typography collection featuring modern, classic, and unique font families
          </p>
          <div className="mt-4 text-sm opacity-80">
            756 font families available
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className="w-64 bg-white p-6 rounded-lg shadow-sm h-fit">
            <h3 className="text-lg font-semibold mb-4">Refine Results</h3>
            
            {/* Font Category Filter */}
            <div className="mb-6">
              <h4 className="font-medium mb-2">Category</h4>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Sans Serif
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Serif
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Script
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Display
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Monospace
                </label>
              </div>
            </div>

            {/* Style Filter */}
            <div className="mb-6">
              <h4 className="font-medium mb-2">Style</h4>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Modern
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Classic
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Elegant
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Bold
                </label>
              </div>
            </div>

            {/* Language Support */}
            <div className="mb-6">
              <h4 className="font-medium mb-2">Language Support</h4>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Latin
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Cyrillic
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Greek
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Extended Latin
                </label>
              </div>
            </div>

            <button className="w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700">
              Apply Filters
            </button>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-semibold">Font Collection</h2>
                <p className="text-gray-600">Professional typography for every project</p>
              </div>
              <select className="p-2 border rounded">
                <option>Most Popular</option>
                <option>Newest</option>
                <option>A-Z</option>
                <option>Price: Low to High</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <div className="aspect-[3/2] bg-gradient-to-br from-orange-100 to-red-100 relative flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-700 mb-2">Aa</div>
                      <div className="text-lg text-gray-600">Font Preview</div>
                    </div>
                    <div className="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 rounded text-xs">
                      Font
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
                    <h3 className="font-medium mb-2">Modern Font Family {i + 1}</h3>
                    <p className="text-sm text-gray-600 mb-2">by Typography Studio</p>
                    <div className="text-xs text-gray-500 mb-3">
                      12 weights • Sans Serif • Latin Extended
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-orange-600">${(Math.random() * 25 + 20).toFixed(2)}</span>
                      <div className="flex items-center">
                        <div className="flex text-yellow-400 text-xs">★★★★★</div>
                        <span className="text-xs text-gray-500 ml-1">(67)</span>
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