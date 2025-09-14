'use client';

import Link from 'next/link';
import { Music, Palette, Mail, Video, Instagram, Twitter, ExternalLink, ChevronDown, Headphones, Brush } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center pt-16">
        <div className="absolute inset-0 bg-gradient-subtle opacity-50"></div>

        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-tight">
            KATE YARTER
          </h1>
          <p className="text-xl md:text-2xl text-light-muted mb-8 font-light">
            Music Producer • Visual Artist • CEO Honey High Records
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/music"
              className="px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-medium"
            >
              LISTEN TO MUSIC
            </Link>
            <Link
              href="/artwork"
              className="px-8 py-3 bg-white text-black hover:bg-transparent hover:text-white border border-white transition-all duration-300 font-medium"
            >
              VIEW ARTWORK
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-pulse">
            <ChevronDown className="w-6 h-6 text-light-muted" />
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">FEATURED WORK</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Music Feature */}
            <Link href="/music" className="group cursor-pointer">
              <div className="relative overflow-hidden bg-dark-card border border-dark-border hover:border-light-border transition-all duration-300">
                <div className="aspect-square bg-gradient-subtle"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Headphones className="w-24 h-24 text-white opacity-20 group-hover:opacity-30 transition-opacity" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">Latest Music</h3>
                  <p className="text-light-muted">
                    Original compositions and productions for games, films, and artistic projects
                  </p>
                </div>
              </div>
            </Link>

            {/* Artwork Feature */}
            <Link href="/artwork" className="group cursor-pointer">
              <div className="relative overflow-hidden bg-dark-card border border-dark-border hover:border-light-border transition-all duration-300">
                <div className="aspect-square bg-gradient-subtle"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Brush className="w-24 h-24 text-white opacity-20 group-hover:opacity-30 transition-opacity" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">Visual Art</h3>
                  <p className="text-light-muted">
                    Canvas paintings, watercolors, and mixed media explorations
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-dark-panel">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">ABOUT</h2>
          <p className="text-lg text-light-muted leading-relaxed mb-8">
            Kate Yarter is an independent artist and music producer based in California.
            As the founder and CEO of Honey High Records, she creates original music for games,
            films, and artistic projects while pursuing her passion for visual arts through
            canvas paintings and watercolor works.
          </p>
          <p className="text-lg text-light-muted leading-relaxed mb-8">
            Her work spans multiple mediums, from ethereal soundscapes and electronic compositions
            to vibrant visual narratives that explore themes of nature, technology, and human emotion.
          </p>
          <Link
            href="/about"
            className="inline-block px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-medium"
          >
            LEARN MORE
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">SERVICES</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Music className="w-12 h-12 mx-auto mb-4 text-white" />
              <h3 className="text-xl font-semibold mb-2">Music Production</h3>
              <p className="text-light-muted">
                Original compositions for games, films, and commercial projects
              </p>
            </div>

            <div className="text-center">
              <Palette className="w-12 h-12 mx-auto mb-4 text-white" />
              <h3 className="text-xl font-semibold mb-2">Art Commissions</h3>
              <p className="text-light-muted">
                Custom paintings and illustrations for personal or commercial use
              </p>
            </div>

            <div className="text-center">
              <Video className="w-12 h-12 mx-auto mb-4 text-white" />
              <h3 className="text-xl font-semibold mb-2">Live Performance</h3>
              <p className="text-light-muted">
                Available for live music performances and artistic collaborations
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-white text-black hover:bg-transparent hover:text-white border border-white transition-all duration-300 font-medium"
            >
              GET IN TOUCH
            </Link>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="py-20 px-4 bg-dark-panel">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">CONNECT</h2>

          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://instagram.com/kateyarter"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-white hover:bg-white hover:text-black transition-all duration-300"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com/kateyarter"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-white hover:bg-white hover:text-black transition-all duration-300"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="https://farcaster.xyz/kateyarter"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-white hover:bg-white hover:text-black transition-all duration-300"
            >
              <ExternalLink className="w-6 h-6" />
            </a>
          </div>

          <div className="mb-8">
            <p className="text-light-muted mb-4">
              Join the newsletter for updates on new releases and events
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-black border border-white focus:border-white text-white placeholder-muted"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-white text-black hover:bg-transparent hover:text-white border border-white transition-all duration-300 font-medium"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>

          <div className="text-light-muted">
            <p className="mb-2">
              <a
                href="https://honeyhighrecords.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Honey High Records
              </a>
            </p>
            <p className="mb-2">
              <a
                href="https://kateyarter.etsy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Etsy Shop
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}