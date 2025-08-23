export default function TemplatesCategory() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Category Header */}
        <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-4">Templates</h1>
          <p className="text-lg opacity-90">
            Professional templates for websites, presentations, social media, and more
          </p>
          <div className="mt-4 text-sm opacity-80">
            1,923 products available
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className="w-64 bg-white p-6 rounded-lg shadow-sm h-fit">
            <h3 className="text-lg font-semibold mb-4">Refine Results</h3>
            
            {/* Template Type Filter */}
            <div className="mb-6">
              <h4 className="font-medium mb-2">Type</h4>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Website Templates
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Presentation
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Social Media
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Brochures
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Email Templates
                </label>
              </div>
            </div>

            {/* Industry Filter */}
            <div className="mb-6">
              <h4 className="font-medium mb-2">Industry</h4>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Business
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Technology
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Healthcare
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Education
                </label>
              </div>
            </div>

            {/* Software Filter */}
            <div className="mb-6">
              <h4 className="font-medium mb-2">Software</h4>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  PowerPoint
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Figma
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Adobe XD
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Sketch
                </label>
              </div>
            </div>

            <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
              Apply Filters
            </button>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-semibold">Template Collection</h2>
                <p className="text-gray-600">Ready-to-use templates for any project</p>
              </div>
              <select className="p-2 border rounded">
                <option>Most Popular</option>
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <div className="aspect-[4/3] bg-gradient-to-br from-green-100 to-teal-100 relative">
                    <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-xs">
                      Template
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
                    <h3 className="font-medium mb-2">Business Template {i + 1}</h3>
                    <p className="text-sm text-gray-600 mb-2">by Professional Design</p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-green-600">${(Math.random() * 40 + 15).toFixed(2)}</span>
                      <div className="flex items-center">
                        <div className="flex text-yellow-400 text-xs">★★★★★</div>
                        <span className="text-xs text-gray-500 ml-1">(89)</span>
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