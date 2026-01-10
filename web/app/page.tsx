'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function MarketingHome() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-green-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="relative w-48 h-12">
                {/* Logo placeholder - user needs to save their logo as futurekind-logo.png */}
                <div className="text-2xl font-bold">
                  <span className="text-blue-400">Future</span>
                  <span className="text-green-400">kind</span>
                  <span className="text-blue-300 text-sm ml-2">MSC LLC</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <Link
                href="#about"
                className="text-gray-300 hover:text-white transition-colors"
              >
                About
              </Link>
              <Link
                href="#mission"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Mission
              </Link>
              <a
                href="https://amazon.com/s?me=YOUR_STORE_ID"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all"
              >
                Shop on Amazon
              </a>
              <Link
                href="/tools"
                className="text-gray-400 hover:text-gray-300 text-sm transition-colors"
              >
                Tools
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <div className="inline-block">
              <div className="relative w-80 h-40 mx-auto mb-8">
                {/* Logo will be displayed here once saved */}
                <div className="flex items-center justify-center h-full">
                  <div className="text-6xl font-bold">
                    <span className="text-blue-400">Future</span>
                    <span className="text-green-400">kind</span>
                  </div>
                </div>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Making Sustainable Living
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                Easy and Accessible
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Carefully curated eco-friendly products that meet high standards for quality,
              durability, and value—so your family can make better choices without overthinking
              every purchase.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <a
                href="https://amazon.com/s?me=YOUR_STORE_ID"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all"
              >
                Browse Our Products
              </a>
              <a
                href="#mission"
                className="border-2 border-white/30 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Our Mission
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-green-400 mx-auto"></div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20">
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed text-center">
              Futurekind MSC's mission is to make sustainable living easier by carefully
              selecting eco-friendly products that meet high standards for quality, durability,
              and value—so families can make better choices without overthinking every purchase.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Why Choose Futurekind?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-green-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Quality */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Quality First</h3>
              <p className="text-gray-300 leading-relaxed">
                Every product is carefully vetted to ensure it meets our high standards for
                durability and performance.
              </p>
            </div>

            {/* Eco-Friendly */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Eco-Conscious</h3>
              <p className="text-gray-300 leading-relaxed">
                All products are selected for their environmental impact, helping you make
                sustainable choices effortlessly.
              </p>
            </div>

            {/* Value */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-green-400 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Great Value</h3>
              <p className="text-gray-300 leading-relaxed">
                We believe sustainability shouldn't break the bank. Our products offer
                excellent value for conscious consumers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-12 text-center shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Browse our collection of eco-friendly products on Amazon today.
            </p>
            <a
              href="https://amazon.com/s?me=YOUR_STORE_ID"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all"
            >
              Shop Now on Amazon
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">
                <span className="text-blue-400">Future</span>
                <span className="text-green-400">kind</span>
              </div>
              <p className="text-gray-400">
                Making sustainable living easier, one product at a time.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="https://amazon.com/s?me=YOUR_STORE_ID" className="text-gray-400 hover:text-white transition-colors">
                    Amazon Store
                  </a>
                </li>
                <li>
                  <a href="#mission" className="text-gray-400 hover:text-white transition-colors">
                    Our Mission
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <p className="text-gray-400">
                Questions about our products?
                <br />
                Reach out through Amazon messaging.
              </p>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Futurekind MSC LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
