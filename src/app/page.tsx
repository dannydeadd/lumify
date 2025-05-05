'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#ededed] text-black font-sans" style={{ fontFamily: 'Inter Tight, Arial, sans-serif' }}>
      {/* Top Navigation Bar */}
      <nav className="w-full flex items-center justify-between px-8 py-4 bg-[#ededed] border-b border-gray-200 sticky top-0 z-30">
        <div className="flex items-center gap-8">
          <span className="font-bold text-2xl tracking-tight">L.</span>
          <div className="hidden md:flex gap-6 text-sm font-medium">
            <div className="relative group">
              <button className="hover:text-gray-700">Explore</button>
              {/* Dropdown could go here */}
            </div>
            <Link href="#" className="hover:text-gray-700">Directory</Link>
            <Link href="#" className="hover:text-gray-700">Academy <span className="ml-1 text-xs bg-black text-white px-1.5 py-0.5 rounded align-middle">New</span></Link>
            <Link href="#" className="hover:text-gray-700">Jobs</Link>
            <Link href="#" className="hover:text-gray-700">Market</Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center max-w-lg">
          <input
            type="text"
            placeholder="Search by Visualization or Artist"
            className="w-full px-4 py-2 rounded bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black text-sm"
          />
        </div>
        <div className="flex items-center gap-3">
          <Link href="#" className="text-sm hover:underline">Log in</Link>
          <Link href="#" className="text-sm hover:underline">Sign Up</Link>
          <button className="ml-2 px-4 py-2 bg-black text-white rounded font-semibold text-sm hover:bg-gray-800">Be Pro</button>
          <button className="ml-2 px-4 py-2 border border-black rounded font-semibold text-sm hover:bg-gray-200">Submit Visualization</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center pt-12 pb-8 bg-[#ededed]">
        {/* Meta Info Row */}
        <div className="flex items-center gap-4 mb-4">
          <span className="text-sm text-gray-700">Visualization of the Day</span>
          <span className="text-xs px-2 py-1 border border-gray-400 rounded bg-white">May 5, 2025</span>
          <span className="text-sm text-gray-700">Score 9.2 of 10</span>
        </div>
        {/* Large Title */}
        <h1 className="font-semibold" style={{ fontFamily: 'Inter Tight, Arial, sans-serif', fontWeight: 600, fontSize: '6vw', letterSpacing: '-0.04em', lineHeight: 1, marginBottom: '0.5rem' }}>LUMIFY</h1>
        {/* Subheadline/credit */}
        <div className="flex items-center gap-2 mb-8">
          <span className="inline-block w-6 h-6 bg-black rounded-full flex items-center justify-center text-white font-bold text-xs">L</span>
          <span className="font-semibold">by VisualizeHub</span>
        </div>
        {/* Featured Visualization Card - larger and longer */}
        <div className="w-full max-w-6xl rounded-2xl overflow-hidden shadow-lg bg-white">
          <div className="relative" style={{ aspectRatio: '16/5' }}>
            <Image
              src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80"
              alt="Featured Visualization"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-12">
              <h2 className="text-3xl md:text-4xl font-medium text-white mb-2" style={{ fontFamily: 'Inter Tight, Arial, sans-serif', fontWeight: 400 }}>The home of the REACTIVE SPACE</h2>
              <p className="text-lg text-gray-200 mb-4">A generative music visual by <span className="font-semibold">@artistname</span></p>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-white text-black rounded font-semibold text-sm hover:bg-gray-200">View Visualization</button>
                <button className="px-4 py-2 bg-black text-white rounded font-semibold text-sm border border-white/30 hover:bg-gray-800">Share</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Visualizations Section - ref5.png style */}
      <section className="py-24" style={{ paddingLeft: 52, paddingRight: 52 }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <span className="block text-sm text-gray-500 mb-2">Latest</span>
            <h2 className="text-6xl md:text-7xl font-semibold tracking-tight mb-2" style={{ fontFamily: 'Inter Tight, Arial, sans-serif', fontWeight: 600, letterSpacing: '-0.03em' }}>NOMINEES</h2>
            <p className="text-lg text-gray-600">Vote for the latest visualizations on Lumify</p>
          </div>
          <div
            className="grid"
            style={{
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '30px',
              justifyContent: 'center',
            }}
          >
            {[
              {
                title: 'Topology',
                author: 'Unseen Studio',
                pro: true,
              },
              {
                title: 'Tanrevel',
                author: 'Panagora',
                pro: true,
              },
              {
                title: 'TOOOTEGRAM',
                author: 'tote',
                pro: true,
              },
            ].map((item, idx) => (
              <div
                key={item.title}
                className="flex flex-col items-center group"
              >
                {/* Card with thick black border and inset image */}
                <div className="bg-white rounded-2xl shadow-xl p-4 w-full" style={{ maxWidth: 444 }}>
                  <div className="bg-black rounded-xl p-4 w-full h-full flex items-center justify-center" style={{ minHeight: 300 }}>
                    <div className="relative w-full" style={{ aspectRatio: '4/3' }}>
                      <Image
                        src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80"
                        alt={`Nominee Visualization ${item.title}`}
                        fill
                        className="object-cover rounded-lg"
                        style={{ boxShadow: '0 2px 16px 0 rgba(0,0,0,0.10)' }}
                      />
                    </div>
                  </div>
                </div>
                {/* Title and author info below card, all on one line */}
                <div className="mt-6 w-full flex flex-row items-center gap-2 justify-start" style={{ maxWidth: 444 }}>
                  <span className="text-lg md:text-xl font-bold mr-2 whitespace-nowrap" style={{ fontFamily: 'Inter Tight, Arial, sans-serif' }}>{item.title}</span>
                  <span className="text-[10px] text-gray-500 font-normal mx-1">by</span>
                  {/* Author avatar placeholder */}
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-black mr-1"></span>
                  {/* Artist name with animated underline, PRO outside */}
                  <span className="flex items-center mr-1">
                    <span className="relative font-bold text-black text-lg md:text-xl whitespace-nowrap underline-anim-parent">
                      {item.author}
                      <span className="absolute left-0 -bottom-0.5 w-full h-[2px] bg-gray-400 overflow-hidden underline-anim">
                        <span className="block h-full w-0 group-hover:w-full transition-all duration-700 bg-black"></span>
                      </span>
                    </span>
                    {item.pro && (
                      <span className="text-[10px] text-gray-500 font-bold ml-1 align-top relative -top-1">PRO</span>
                    )}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Explore Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Wave', 'Particle', 'Geometric', 'Abstract'].map((category) => (
              <div 
                key={category}
                className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center text-xl font-semibold hover:bg-gray-700 transition-colors cursor-pointer"
              >
                {category}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Start Creating Your Own Visualizations</h2>
          <p className="text-xl text-gray-400 mb-8">
            Transform your music into stunning visual experiences. Share your creations with the world.
          </p>
          <Link 
            href="/visualizer"
            className="inline-block bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </section>
    </main>
  );
}
