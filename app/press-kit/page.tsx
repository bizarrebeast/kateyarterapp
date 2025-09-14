'use client';

import { Download, Image, FileText, Music, Mail, ExternalLink } from 'lucide-react';

export default function PressKitPage() {
  const downloads = [
    {
      title: 'Artist Bio (Short)',
      description: 'One-paragraph artist biography for press releases',
      icon: FileText,
      fileSize: '12 KB',
      format: 'PDF',
    },
    {
      title: 'Artist Bio (Full)',
      description: 'Complete artist biography with background and achievements',
      icon: FileText,
      fileSize: '45 KB',
      format: 'PDF',
    },
    {
      title: 'Press Photos',
      description: 'High-resolution promotional photos (300 DPI)',
      icon: Image,
      fileSize: '25 MB',
      format: 'ZIP',
    },
    {
      title: 'Logo Pack',
      description: 'Kate Yarter and Honey High Records logos in various formats',
      icon: Image,
      fileSize: '8 MB',
      format: 'ZIP',
    },
    {
      title: 'Music Samples',
      description: 'Selection of recent tracks for media use',
      icon: Music,
      fileSize: '35 MB',
      format: 'ZIP',
    },
    {
      title: 'Technical Rider',
      description: 'Performance requirements and stage setup',
      icon: FileText,
      fileSize: '18 KB',
      format: 'PDF',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-36 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">PRESS KIT</h1>
          <p className="text-lg text-light-muted">
            Media resources, promotional materials, and press information
          </p>
        </div>

        {/* Quick Facts */}
        <div className="bg-dark-card border border-dark-border p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-6">Quick Facts</h2>
          <div className="grid md:grid-cols-2 gap-y-4 gap-x-8">
            <div>
              <p className="text-sm text-muted mb-1">Name</p>
              <p className="font-medium">Kate Yarter</p>
            </div>
            <div>
              <p className="text-sm text-muted mb-1">Based In</p>
              <p className="font-medium">California, USA</p>
            </div>
            <div>
              <p className="text-sm text-muted mb-1">Genres</p>
              <p className="font-medium">Electronic, Ambient, Soundtrack</p>
            </div>
            <div>
              <p className="text-sm text-muted mb-1">Label</p>
              <p className="font-medium">Honey High Records (Founder/CEO)</p>
            </div>
            <div>
              <p className="text-sm text-muted mb-1">Active Since</p>
              <p className="font-medium">2014</p>
            </div>
            <div>
              <p className="text-sm text-muted mb-1">Art Mediums</p>
              <p className="font-medium">Canvas, Watercolor, Mixed Media</p>
            </div>
          </div>
        </div>

        {/* Short Bio */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Short Bio</h2>
          <div className="bg-dark-panel border border-dark-border p-6">
            <p className="text-light-text leading-relaxed">
              Kate Yarter is an independent music producer and visual artist based in California.
              As the founder and CEO of Honey High Records, she creates original compositions for
              games, films, and artistic projects while pursuing visual arts through canvas paintings
              and watercolors. Her work explores the intersection of nature, technology, and human
              emotion across multiple mediums.
            </p>
          </div>
        </div>

        {/* Downloads */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Downloads</h2>
          <div className="grid gap-4">
            {downloads.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-dark-card border border-dark-border p-6 hover:border-light-border transition-all duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-dark-hover rounded">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        <p className="text-sm text-light-muted mb-2">{item.description}</p>
                        <p className="text-xs text-muted">
                          {item.format} • {item.fileSize}
                        </p>
                      </div>
                    </div>
                    <button className="p-2 hover:bg-dark-hover transition-colors rounded">
                      <Download className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Press Quotes */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Press Quotes</h2>
          <div className="space-y-6">
            <blockquote className="border-l-2 border-white pl-6">
              <p className="text-lg italic mb-2">
                "Kate Yarter's compositions bring a unique blend of ethereal soundscapes
                and electronic innovation that perfectly captures the essence of modern gaming."
              </p>
              <cite className="text-sm text-muted">— Independent Game Developer</cite>
            </blockquote>

            <blockquote className="border-l-2 border-white pl-6">
              <p className="text-lg italic mb-2">
                "Her artwork explores the delicate balance between organic forms and
                digital precision, creating pieces that resonate on multiple levels."
              </p>
              <cite className="text-sm text-muted">— Art Gallery Curator</cite>
            </blockquote>
          </div>
        </div>

        {/* Links & Resources */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Links & Resources</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a
              href="https://honeyhighrecords.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-dark-card border border-dark-border hover:border-light-border transition-all duration-300"
            >
              <ExternalLink className="w-5 h-5" />
              <div>
                <p className="font-medium">Honey High Records</p>
                <p className="text-sm text-muted">Official label website</p>
              </div>
            </a>

            <a
              href="https://kateyarter.etsy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-dark-card border border-dark-border hover:border-light-border transition-all duration-300"
            >
              <ExternalLink className="w-5 h-5" />
              <div>
                <p className="font-medium">Etsy Shop</p>
                <p className="text-sm text-muted">Original artwork for sale</p>
              </div>
            </a>

            <a
              href="https://spotify.com/artist/kateyarter"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-dark-card border border-dark-border hover:border-light-border transition-all duration-300"
            >
              <Music className="w-5 h-5" />
              <div>
                <p className="font-medium">Spotify</p>
                <p className="text-sm text-muted">Streaming catalog</p>
              </div>
            </a>

            <a
              href="https://youtube.com/@kateyarter"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-dark-card border border-dark-border hover:border-light-border transition-all duration-300"
            >
              <ExternalLink className="w-5 h-5" />
              <div>
                <p className="font-medium">YouTube</p>
                <p className="text-sm text-muted">Music videos and content</p>
              </div>
            </a>
          </div>
        </div>

        {/* Contact for Press */}
        <div className="bg-dark-panel border border-dark-border p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Press Inquiries</h2>
          <p className="text-light-muted mb-6">
            For interviews, features, or additional press materials, please get in touch.
          </p>
          <a
            href="mailto:press@kateyarter.com"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black hover:bg-transparent hover:text-white border border-white transition-all duration-300 font-medium"
          >
            <Mail className="w-5 h-5" />
            press@kateyarter.com
          </a>
        </div>
      </div>
    </div>
  );
}