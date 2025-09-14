'use client';

import Link from 'next/link';
import { Music, Palette, Award, Users, ExternalLink, Instagram, Twitter } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-36 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">ABOUT</h1>
        </div>

        {/* Bio Section */}
        <div className="prose prose-invert max-w-none mb-16">
          <div className="text-lg leading-relaxed space-y-6 text-light-text">
            <p>
              Kate Yarter is an independent artist and music producer whose work bridges the gap between
              traditional artistry and contemporary digital expression. As the founder and CEO of Honey High Records,
              she has established herself as a versatile creative force in both the music and visual arts communities.
            </p>

            <p>
              Her musical journey spans original compositions for games, films, and artistic projects,
              with a distinctive style that blends ethereal soundscapes with electronic elements.
              Kate's work has been featured in numerous independent games and digital experiences,
              including the BizarreBeasts gaming ecosystem, where her atmospheric compositions have
              enhanced gameplay for thousands of players.
            </p>

            <p>
              In the visual arts, Kate works primarily with canvas and watercolor, creating pieces that
              explore the intersection of nature, technology, and human emotion. Her paintings often
              feature flowing organic forms contrasted with geometric precision, reflecting her dual
              interests in the natural world and digital innovation.
            </p>

            <p>
              Through Honey High Records, Kate not only produces her own work but also collaborates
              with other independent artists, fostering a creative community that values artistic
              integrity and innovation. The label serves as a platform for experimental music and
              cross-disciplinary projects that push creative boundaries.
            </p>
          </div>
        </div>

        {/* Stats/Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-dark-card border border-dark-border p-6 text-center">
            <Music className="w-8 h-8 mx-auto mb-3 text-white" />
            <h3 className="text-xl font-semibold mb-2">Music Production</h3>
            <p className="text-muted text-sm">50+ Original Compositions</p>
          </div>

          <div className="bg-dark-card border border-dark-border p-6 text-center">
            <Palette className="w-8 h-8 mx-auto mb-3 text-white" />
            <h3 className="text-xl font-semibold mb-2">Visual Art</h3>
            <p className="text-muted text-sm">100+ Original Works</p>
          </div>

          <div className="bg-dark-card border border-dark-border p-6 text-center">
            <Award className="w-8 h-8 mx-auto mb-3 text-white" />
            <h3 className="text-xl font-semibold mb-2">Experience</h3>
            <p className="text-muted text-sm">10+ Years Creating</p>
          </div>
        </div>

        {/* Honey High Records Section */}
        <div className="bg-dark-panel border border-dark-border p-8 mb-16">
          <h2 className="text-3xl font-bold mb-4">Honey High Records</h2>
          <p className="text-light-muted mb-6">
            Founded in 2020, Honey High Records is an independent music label dedicated to
            supporting innovative artists and experimental music. The label focuses on
            genre-defying releases that challenge conventional boundaries while maintaining
            artistic authenticity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://honeyhighrecords.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              <ExternalLink className="w-5 h-5" />
              Visit Honey High Records
            </a>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Creative Philosophy</h2>
          <div className="space-y-6 text-light-muted">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Art as Expression</h3>
              <p>
                Every piece, whether musical or visual, is an exploration of emotion and experience.
                The creative process is as important as the final work, with each project serving
                as a journey of discovery.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Collaboration Over Competition</h3>
              <p>
                The creative community thrives when artists support and inspire each other.
                Through Honey High Records and personal collaborations, fostering connections
                between artists and audiences is paramount.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Innovation Through Tradition</h3>
              <p>
                While embracing new technologies and digital platforms, the foundation remains
                rooted in traditional artistic techniques and timeless creative principles.
              </p>
            </div>
          </div>
        </div>

        {/* Press & Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Select Projects & Collaborations</h2>
          <ul className="space-y-3 text-light-muted">
            <li className="flex items-start gap-2">
              <span className="text-white mt-1">•</span>
              <span>Original soundtrack composition for BizarreBeasts gaming ecosystem</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white mt-1">•</span>
              <span>Featured artist in multiple independent gallery exhibitions</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white mt-1">•</span>
              <span>Music production for various independent films and documentaries</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white mt-1">•</span>
              <span>Commissioned artwork for private collections worldwide</span>
            </li>
          </ul>
        </div>

        {/* Contact CTA */}
        <div className="text-center py-12 border-t border-dark-border">
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-light-muted mb-8 max-w-2xl mx-auto">
            Whether you're looking for original music, custom artwork, or creative collaboration,
            I'd love to hear about your project.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-white text-black hover:bg-transparent hover:text-white border border-white transition-all duration-300 font-medium"
            >
              Get In Touch
            </Link>
            <Link
              href="/press-kit"
              className="px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-medium"
            >
              Press Kit
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mt-8">
            <a
              href="https://instagram.com/kateyarter"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-white hover:bg-white hover:text-black transition-all duration-300"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/kateyarter"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-white hover:bg-white hover:text-black transition-all duration-300"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://farcaster.xyz/kateyarter"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-white hover:bg-white hover:text-black transition-all duration-300"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}