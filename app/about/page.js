"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      title: 'Quick And Reliable Payouts',
      description: 'Get paid instantly when your designs sell. Our platform ensures creators receive their earnings quickly and securely.',
      icon: '💰'
    },
    {
      title: 'Up To 90% Profit Split',
      description: 'Keep more of what you earn. Our industry-leading profit split ensures creators get the maximum value from their work.',
      icon: '📊'
    },
    {
      title: 'Weekly Payout Options',
      description: 'Choose your payout schedule. Get paid weekly, monthly, or on-demand based on your preferences.',
      icon: '📅'
    }
  ];

  const comparisonData = [
    {
      feature: 'Platform',
      glorify: 'AI-driven marketplace with automated tagging and optimization',
      others: 'Standard marketplace'
    },
    {
      feature: 'Core Stats',
      glorify: 'Client customization, automated curation and high conversion rates',
      others: 'Manual process, limited signals and conversion rates'
    },
    {
      feature: 'Messaging Capabilities',
      glorify: 'Multi-channel messaging: Slack, Email, Web notifications and mobile push',
      others: 'Mobile messaging is very limited capabilities for offline channels'
    },
    {
      feature: 'User Collaboration',
      glorify: 'Supports multi-user licenses, internal team messaging and team analytics',
      others: 'Limited team collaboration features'
    },
    {
      feature: 'Automation Tools',
      glorify: 'Auto-tagging, AI content, thumbnail generation and metadata',
      others: 'Manual uploading, basic automation for creators'
    },
    {
      feature: 'Live Stats',
      glorify: 'Best for analyzing trading ideas, community engagement and support',
      others: 'Best for digital downloading and technical analysis'
    },
    {
      feature: 'Data Alerts Integration',
      glorify: 'Webhooks, Advanced APIs, Email, chat notifications and alerting integrations',
      others: 'Basic APIs, limited chat integrations'
    }
  ];

  const advancedFeatures = [
    {
      title: 'Real-Time Market Insight',
      description: 'Track design trends, market demands, and creator performance with advanced analytics and real-time data visualization.',
      image: '📈'
    },
    {
      title: 'Advanced Account Analysis',
      description: 'Get detailed insights on your creative portfolio performance with comprehensive analytics and growth tracking.',
      image: '📊'
    },
    {
      title: 'Portfolio Management',
      description: 'Easily track your creative portfolio, organize collections, and monitor performance across different categories.',
      image: '💼'
    },
    {
      title: 'Advanced Creation Tools',
      description: 'Professional-grade tools for creating, editing, and optimizing digital assets with AI-powered assistance.',
      image: '🎨'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-orange-500/20 to-red-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {/* Badge */}
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                <span className="text-sm text-white/80">Est. 2020 • Premium Digital Marketplace</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                GlorifyDesign Vs Others:
                <br />
                <span className="text-orange-400">Which Platform Is</span>
                <br />
                Better For You?
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Compare our features against the competition and discover why thousands of creators choose GlorifyDesign for their digital asset needs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/shop"
                  className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Get Started
                </Link>
                <Link 
                  href="/signup"
                  className="px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors"
                >
                  Try GlorifyDesign
                </Link>
              </div>
            </div>

            {/* Dashboard Preview */}
            <div className="relative">
              <div className="bg-gray-900 rounded-2xl border border-gray-800 p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-xs text-gray-500">GlorifyDesign Dashboard</div>
                </div>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-4 gap-4">
                    {['Graphics', 'Templates', 'Fonts', 'Icons'].map((item, index) => (
                      <div key={index} className="bg-gray-800 rounded-lg p-3 text-center">
                        <div className="text-2xl mb-1">🎨</div>
                        <div className="text-xs text-gray-400">{item}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium">Performance</span>
                      <span className="text-green-400 text-sm">+12.5%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full w-3/4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trusted By Section */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm mb-6">Trusted by 50+ Companies</p>
          <div className="flex justify-center items-center space-x-8 opacity-50">
            {['Company A', 'Company B', 'Company C', 'Company D', 'Company E'].map((company, index) => (
              <div key={index} className="text-gray-600 font-medium">{company}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Why Choose <span className="text-orange-400">Us?</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Backed by a suite of powerful tools at our fingertips.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-xl flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <div className="inline-block p-8 bg-gradient-to-br from-orange-500/20 to-red-500/10 rounded-2xl">
                <div className="text-6xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
                <p className="text-gray-400 mb-6">Join thousands of creators who trust GlorifyDesign.</p>
                <Link 
                  href="/signup"
                  className="inline-block px-8 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors"
                >
                  Start Creating
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              GlorifyDesign Vs. Others:
              <br />
              Compare <span className="text-orange-400">Flexibility</span>
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-4 px-6 text-gray-400 font-medium"></th>
                  <th className="text-center py-4 px-6">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-xl">⚡</span>
                      <span className="font-bold">GlorifyDesign</span>
                    </div>
                  </th>
                  <th className="text-center py-4 px-6 text-gray-400 font-medium">Others</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="border-b border-gray-800/50 hover:bg-gray-900/30 transition-colors">
                    <td className="py-6 px-6 font-medium text-gray-300">{row.feature}</td>
                    <td className="py-6 px-6 text-center text-sm text-gray-300">{row.glorify}</td>
                    <td className="py-6 px-6 text-center text-sm text-gray-500">{row.others}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why Switch Section */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Why Switch <span className="text-orange-400">From Others</span>
            <br />
            To GlorifyDesign?
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {advancedFeatures.map((feature, index) => (
            <div key={index} className="space-y-6">
              <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
                <div className="text-4xl mb-4 text-center">{feature.image}</div>
                <div className="space-y-2">
                  <div className="w-full bg-gray-800 rounded h-2"></div>
                  <div className="w-3/4 bg-gray-800 rounded h-2"></div>
                  <div className="w-1/2 bg-gray-800 rounded h-2"></div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-orange-500/20 to-red-500/10 rounded-3xl p-12 border border-orange-500/20">
            <h2 className="text-4xl font-bold mb-6">
              Ready to <span className="text-orange-400">Elevate</span> Your Creative Journey?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of creators who have already made the switch to GlorifyDesign. 
              Experience the difference today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/signup"
                className="px-8 py-4 bg-orange-600 text-white font-bold text-lg rounded-lg hover:bg-orange-700 transition-colors shadow-lg"
              >
                Start Free Trial
              </Link>
              <Link 
                href="/contact"
                className="px-8 py-4 bg-white/10 text-white font-bold text-lg rounded-lg border border-white/20 hover:bg-white/20 transition-colors backdrop-blur-sm"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}