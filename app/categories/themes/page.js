export default function ThemesCategory() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Category Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-4">Themes</h1>
          <p className="text-lg opacity-90">
            Complete design systems and themes for websites, apps, and digital products
          </p>
          <div className="mt-4 text-sm opacity-80">
            432 themes available
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className="w-64 bg-white p-6 rounded-lg shadow-sm h-fit">
            <h3 className="text-lg font-semibold mb-4">Refine Results</h3>
            
            {/* Platform Filter */}
            <div className="mb-6">
              <h4 className="font-medium mb-2">Platform</h4>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  WordPress
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Shopify
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  React
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Vue.js
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  HTML/CSS
                </label>
              </div>
            </div>

            {/* Purpose Filter */}
            <div className="mb-6">
              <h4 className="font-medium mb-2">Purpose</h4>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Business
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  E-commerce
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Portfolio
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Blog
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Agency
                </label>
              </div>
            </div>

            {/* Features Filter */}
            <div className="mb-6">
              <h4 className="font-medium mb-2">Features</h4>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Responsive
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Dark Mode
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Animations
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Multilingual
                </label>
              </div>
            </div>

            <button className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
              Apply Filters
            </button>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-semibold">Theme Collection</h2>
                <p className="text-gray-600">Professional themes and design systems</p>
              </div>
              <select className="p-2 border rounded">
                <option>Most Popular</option>
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <div className="aspect-[16/10] bg-gradient-to-br from-indigo-100 to-purple-100 relative">
                    <div className="absolute inset-4 bg-white rounded shadow-sm flex flex-col">
                      <div className="h-3 bg-gray-200 rounded-full mx-3 mt-3"></div>
                      <div className="flex-1 m-3 space-y-2">
                        <div className="h-2 bg-indigo-200 rounded w-3/4"></div>
                        <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                        <div className="h-2 bg-gray-200 rounded w-2/3"></div>
                      </div>
                    </div>
                    <div className="absolute top-2 left-2 bg-indigo-500 text-white px-2 py-1 rounded text-xs">
                      Theme
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
                    <h3 className="font-medium mb-2">Modern Business Theme {i + 1}</h3>
                    <p className="text-sm text-gray-600 mb-2">by Design Agency</p>
                    <div className="text-xs text-gray-500 mb-3">
                      WordPress • Responsive • Dark Mode
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-indigo-600">${(Math.random() * 60 + 40).toFixed(2)}</span>
                      <div className="flex items-center">
                        <div className="flex text-yellow-400 text-xs">★★★★★</div>
                        <span className="text-xs text-gray-500 ml-1">(156)</span>
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