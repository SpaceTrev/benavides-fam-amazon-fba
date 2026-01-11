import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl">B</span>
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">Benavides Family</div>
                <div className="text-xs text-gray-500">Quality Products for Life</div>
              </div>
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#products" className="text-gray-600 hover:text-gray-900 transition font-medium">Products</a>
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition font-medium">About</a>
              <a href="#mission" className="text-gray-600 hover:text-gray-900 transition font-medium">Mission</a>
              <a href="https://amazon.com" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-2.5 rounded-lg hover:shadow-lg transition font-semibold">
                Shop on Amazon
              </a>
              <Link 
                href="/tools"
                className="text-gray-400 hover:text-gray-600 transition text-sm"
              >
                Admin
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 pt-20 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Quality Products,
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                Family Values
              </span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover carefully curated products selected by the Benavides family. 
              From home essentials to lifestyle goods, we bring you quality items backed by our commitment to excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/tools"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition shadow-lg hover:shadow-xl"
              >
                Get Started Free
              </Link>
              <a 
                href="#features"
                className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition shadow-lg border border-gray-200"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">5+</div>
              <div className="text-gray-600">Research Templates</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">∞</div>
              <div className="text-gray-600">Product Tracking</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">100%</div>
              <div className="text-gray-600">Family Owned</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600">
              Powerful tools built specifically for Amazon FBA sellers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 hover:shadow-xl transition">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Product Research</h3>
              <p className="text-gray-600">
                Organize and track your product research with structured templates and notes.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 hover:shadow-xl transition">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Margin Calculator</h3>
              <p className="text-gray-600">
                Calculate profits, fees, and margins for all your FBA products in one place.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-8 hover:shadow-xl transition">
              <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Niche Comparison</h3>
              <p className="text-gray-600">
                Compare different product niches side-by-side to find the best opportunities.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 hover:shadow-xl transition">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Validation Checklist</h3>
              <p className="text-gray-600">
                Never miss a step with our comprehensive product validation checklist.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8 hover:shadow-xl transition">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">File Management</h3>
              <p className="text-gray-600">
                Keep all your research documents, spreadsheets, and notes organized.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-8 hover:shadow-xl transition">
              <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quick Setup</h3>
              <p className="text-gray-600">
                Generate complete product research kits with one command via CLI or web.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powerful Tools at Your Fingertips
            </h2>
            <p className="text-xl text-gray-600">
              Choose the workflow that fits your style
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Web Interface */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-blue-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Web Interface</h3>
                <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-3 py-1 rounded-full">
                  Recommended
                </span>
              </div>
              <p className="text-gray-600 mb-6">
                User-friendly web application with intuitive forms and real-time updates.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Visual file management</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Easy product creation</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Browser-based access</span>
                </li>
              </ul>
              <Link 
                href="/tools"
                className="block w-full bg-blue-600 text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Launch Web App
              </Link>
            </div>

            {/* CLI Tool */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Command Line</h3>
                <span className="bg-gray-100 text-gray-700 text-sm font-semibold px-3 py-1 rounded-full">
                  Advanced
                </span>
              </div>
              <p className="text-gray-600 mb-6">
                Fast command-line tool for developers who prefer terminal workflows.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Lightning fast setup</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Scriptable & automatable</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">No browser required</span>
                </li>
              </ul>
              <div className="bg-gray-900 rounded-lg p-4 mb-4">
                <code className="text-green-400 text-sm">
                  $ npm run create-product fuzzy-socks
                </code>
              </div>
              <a 
                href="/docs/getting-started"
                className="block w-full bg-gray-800 text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition"
              >
                View Documentation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Built for Family, Built for Success
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            FuturKind is a custom-built solution for the Benavides family Amazon FBA business. 
            This toolkit combines years of e-commerce experience with modern technology to 
            streamline product research, financial analysis, and business operations.
          </p>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <p className="text-lg text-gray-700 italic">
              "We built this tool to solve our own problems — managing product research, 
              tracking margins, and making data-driven decisions faster. Now we're sharing 
              it with our family to help everyone succeed."
            </p>
            <p className="text-gray-600 mt-4 font-semibold">— The Benavides Family</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                <span className="text-xl font-bold">FuturKind</span>
              </div>
              <p className="text-gray-400">
                Your Amazon FBA Success Partner
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-white transition">Features</a></li>
                <li><a href="#tools" className="hover:text-white transition">Tools</a></li>
                <li><Link href="/tools" className="hover:text-white transition">Web App</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/docs/getting-started" className="hover:text-white transition">Documentation</a></li>
                <li><a href="#about" className="hover:text-white transition">About Us</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2026 FuturKind. Built for the Benavides Family. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
