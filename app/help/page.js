"use client";
import { useState } from 'react';

export default function Help() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaq, setOpenFaq] = useState(null);

  const faqCategories = [
    {
      title: 'Getting Started',
      faqs: [
        {
          question: 'How do I create an account?',
          answer: 'Click on the "Sign Up" button in the top right corner and choose whether you want to buy or sell. Fill in your details and verify your email to get started.'
        },
        {
          question: 'What types of digital assets can I find?',
          answer: 'We offer graphics, templates, fonts, themes, and more. Our marketplace features thousands of high-quality digital assets from talented creators worldwide.'
        },
        {
          question: 'How do I download my purchased items?',
          answer: 'After purchase, you can download your items from your account dashboard. We also send download links to your email address.'
        }
      ]
    },
    {
      title: 'Buying & Licensing',
      faqs: [
        {
          question: 'What licenses are available?',
          answer: 'We offer both personal and commercial licenses. Personal licenses are for non-commercial use, while commercial licenses allow you to use items in client projects and commercial work.'
        },
        {
          question: 'Can I get a refund?',
          answer: 'Yes, we offer a 30-day money-back guarantee. If you\'re not satisfied with your purchase, contact our support team for a full refund.'
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and various other payment methods depending on your region.'
        }
      ]
    },
    {
      title: 'Selling on GlorifyDesign',
      faqs: [
        {
          question: 'How do I become a seller?',
          answer: 'Sign up for a seller account and complete your profile. Submit your first design for review, and once approved, you can start selling on our marketplace.'
        },
        {
          question: 'What commission do you charge?',
          answer: 'We take a 20% commission on all sales. This means you keep 80% of the revenue from each sale, which is among the best rates in the industry.'
        },
        {
          question: 'How do I get paid?',
          answer: 'Payments are processed monthly via PayPal or bank transfer. You need to reach a minimum threshold of $50 before receiving your first payout.'
        }
      ]
    },
    {
      title: 'Technical Support',
      faqs: [
        {
          question: 'I can\'t download my files',
          answer: 'Try clearing your browser cache and cookies, or try downloading in a different browser. If the issue persists, contact our support team with your order details.'
        },
        {
          question: 'The file is corrupted or won\'t open',
          answer: 'This is rare, but if it happens, please contact us immediately. We\'ll provide a replacement file or full refund.'
        },
        {
          question: 'How do I report a copyright infringement?',
          answer: 'Send us a detailed report with evidence of the infringement. We take intellectual property seriously and will investigate all claims promptly.'
        }
      ]
    }
  ];

  const toggleFaq = (categoryIndex, faqIndex) => {
    const key = `${categoryIndex}-${faqIndex}`;
    setOpenFaq(openFaq === key ? null : key);
  };

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Help Center</h1>
          <p className="text-xl opacity-90 mb-8">
            Find answers to your questions and get the help you need
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="flex bg-white rounded-lg overflow-hidden">
              <input 
                type="text" 
                placeholder="Search for help articles..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-6 py-4 text-gray-700 outline-none text-lg"
              />
              <button className="bg-blue-700 px-6 py-4 hover:bg-blue-800">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Help Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Quick Help</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                🛒
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">How to Buy</h3>
              <p className="text-gray-600 text-sm">Learn how to purchase and download digital assets</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                💼
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Selling Guide</h3>
              <p className="text-gray-600 text-sm">Everything you need to know about selling on our platform</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                📜
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Licenses</h3>
              <p className="text-gray-600 text-sm">Understand our licensing terms and usage rights</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                🆘
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Contact Support</h3>
              <p className="text-gray-600 text-sm">Get in touch with our support team</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-4xl mx-auto">
            {filteredCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">{category.title}</h3>
                <div className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => (
                    <div key={faqIndex} className="border border-gray-200 rounded-lg">
                      <button
                        onClick={() => toggleFaq(categoryIndex, faqIndex)}
                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                      >
                        <span className="font-medium text-gray-800">{faq.question}</span>
                        <svg 
                          className={`w-5 h-5 transform transition-transform ${
                            openFaq === `${categoryIndex}-${faqIndex}` ? 'rotate-180' : ''
                          }`}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {openFaq === `${categoryIndex}-${faqIndex}` && (
                        <div className="px-6 py-4 border-t border-gray-200">
                          <p className="text-gray-600">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
            
            {filteredCategories.length === 0 && searchQuery && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">No results found</h3>
                <p className="text-gray-600">Try adjusting your search terms or browse our categories above.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Still Need Help?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our support team is here to help you with any questions or issues.
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="/contact" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Contact Support
            </a>
            <a 
              href="mailto:support@glorifydesign.com" 
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Email Us
            </a>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Response Time</h4>
              <p className="text-gray-600">Usually within 24 hours</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Support Hours</h4>
              <p className="text-gray-600">Monday - Friday, 9AM - 6PM EST</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Languages</h4>
              <p className="text-gray-600">English, Spanish, French</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}