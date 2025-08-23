export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About GlorifyDesign</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            We're on a mission to connect creative minds worldwide and provide the best digital assets for your projects
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg mx-auto">
              <p className="text-gray-700 leading-relaxed mb-6">
                Founded in 2020, GlorifyDesign started as a simple idea: to create a marketplace where 
                creative professionals could easily find and share high-quality digital assets. What began 
                as a small platform has grown into a thriving community of over 10,000 creators and 50,000 
                satisfied customers worldwide.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                We believe that great design should be accessible to everyone, whether you're a seasoned 
                professional or just starting your creative journey. That's why we've built a platform 
                that not only offers premium digital assets but also supports and empowers the creative 
                community that makes it all possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                ⚡
              </div>
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-gray-600">
                We constantly push the boundaries of creativity and technology to provide cutting-edge design solutions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                🤝
              </div>
              <h3 className="text-xl font-semibold mb-4">Community</h3>
              <p className="text-gray-600">
                Our strength lies in our diverse community of creators, each bringing unique perspectives and skills.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                🎯
              </div>
              <h3 className="text-xl font-semibold mb-4">Quality</h3>
              <p className="text-gray-600">
                We maintain the highest standards for all digital assets on our platform, ensuring exceptional quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Sarah Johnson', role: 'CEO & Founder', avatar: '👩‍💼' },
              { name: 'Michael Chen', role: 'CTO', avatar: '👨‍💻' },
              { name: 'Emily Rodriguez', role: 'Head of Design', avatar: '👩‍🎨' },
              { name: 'David Kim', role: 'Head of Marketing', avatar: '👨‍📊' }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                  {member.avatar}
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">By the Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2 text-blue-400">50K+</div>
              <div className="text-gray-300">Digital Assets</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2 text-green-400">10K+</div>
              <div className="text-gray-300">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2 text-purple-400">2K+</div>
              <div className="text-gray-300">Creative Sellers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2 text-yellow-400">150+</div>
              <div className="text-gray-300">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Mission</h2>
            <blockquote className="text-xl text-gray-700 italic leading-relaxed">
              "To democratize access to high-quality digital assets and empower creators worldwide 
              to bring their visions to life, while building a sustainable ecosystem that benefits 
              both creators and customers."
            </blockquote>
            <div className="mt-8">
              <cite className="text-gray-600">- Sarah Johnson, CEO & Founder</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Creative Community</h2>
          <p className="text-xl mb-8 opacity-90">
            Whether you're looking to buy or sell, we'd love to have you as part of our family
          </p>
          <div className="flex justify-center gap-4">
            <a href="/shop" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Shopping
            </a>
            <a href="/signup" className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Become a Seller
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}