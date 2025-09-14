'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Filter, X, ExternalLink, ShoppingBag, Maximize2 } from 'lucide-react';

type ArtworkCategory = 'all' | 'canvas' | 'watercolor' | 'mixed';

interface Artwork {
  id: string;
  title: string;
  category: ArtworkCategory;
  medium: string;
  size: string;
  year: string;
  price?: string;
  available: boolean;
  imageUrl: string;
  description: string;
  etsyUrl?: string;
}

// Placeholder artwork data - replace with actual artwork
const artworks: Artwork[] = [
  {
    id: '1',
    title: 'Ethereal Landscape I',
    category: 'canvas',
    medium: 'Acrylic on Canvas',
    size: '24" x 36"',
    year: '2024',
    price: '$1,200',
    available: true,
    imageUrl: '/artwork/canvas/ethereal-landscape-1.jpg',
    description: 'An exploration of natural forms and ethereal light',
    etsyUrl: 'https://kateyarter.etsy.com/listing/1'
  },
  {
    id: '2',
    title: 'Flowing Waters',
    category: 'watercolor',
    medium: 'Watercolor on Paper',
    size: '16" x 20"',
    year: '2024',
    price: '$450',
    available: true,
    imageUrl: '/artwork/watercolor/flowing-waters.jpg',
    description: 'Fluid movements captured in translucent layers',
    etsyUrl: 'https://kateyarter.etsy.com/listing/2'
  },
  {
    id: '3',
    title: 'Digital Dreams',
    category: 'mixed',
    medium: 'Mixed Media',
    size: '30" x 40"',
    year: '2023',
    price: '$1,800',
    available: false,
    imageUrl: '/artwork/mixed/digital-dreams.jpg',
    description: 'A fusion of traditional and digital techniques',
  },
];

export default function ArtworkPage() {
  const [selectedCategory, setSelectedCategory] = useState<ArtworkCategory>('all');
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [showFilter, setShowFilter] = useState(false);

  const filteredArtworks = selectedCategory === 'all'
    ? artworks
    : artworks.filter(art => art.category === selectedCategory);

  const categories: { value: ArtworkCategory; label: string }[] = [
    { value: 'all', label: 'All Work' },
    { value: 'canvas', label: 'Canvas' },
    { value: 'watercolor', label: 'Watercolor' },
    { value: 'mixed', label: 'Mixed Media' },
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-36 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">ARTWORK</h1>
          <p className="text-lg text-light-muted max-w-3xl">
            Original paintings and visual art exploring themes of nature, technology, and human emotion
            through various mediums and techniques.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          {/* Desktop Filter */}
          <div className="hidden md:flex gap-4">
            {categories.map(cat => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-6 py-2 border transition-all duration-300 ${
                  selectedCategory === cat.value
                    ? 'bg-white text-black border-white'
                    : 'border-white text-white hover:bg-white hover:text-black'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setShowFilter(!showFilter)}
            className="md:hidden flex items-center gap-2 px-6 py-2 border border-white hover:bg-white hover:text-black transition-all duration-300"
          >
            <Filter className="w-4 h-4" />
            Filter
          </button>

          {/* Results Count */}
          <p className="text-light-muted">
            {filteredArtworks.length} {filteredArtworks.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        {/* Mobile Filter Menu */}
        {showFilter && (
          <div className="md:hidden mb-8 p-4 bg-dark-card border border-dark-border">
            <div className="flex flex-col gap-2">
              {categories.map(cat => (
                <button
                  key={cat.value}
                  onClick={() => {
                    setSelectedCategory(cat.value);
                    setShowFilter(false);
                  }}
                  className={`px-4 py-2 text-left transition-all duration-300 ${
                    selectedCategory === cat.value
                      ? 'bg-white text-black'
                      : 'text-white hover:bg-dark-hover'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Artwork Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtworks.map(artwork => (
            <div
              key={artwork.id}
              className="group cursor-pointer"
              onClick={() => setSelectedArtwork(artwork)}
            >
              <div className="relative overflow-hidden bg-dark-card border border-dark-border hover:border-light-border transition-all duration-300">
                {/* Image Container */}
                <div className="aspect-square bg-gradient-subtle relative">
                  {/* Placeholder for actual image */}
                  <div className="absolute inset-0 flex items-center justify-center text-muted">
                    <div className="text-center">
                      <p className="text-sm mb-2">Image Placeholder</p>
                      <p className="text-xs">{artwork.title}</p>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <Maximize2 className="w-8 h-8 text-white" />
                  </div>

                  {/* Availability Badge */}
                  {!artwork.available && (
                    <div className="absolute top-4 right-4 bg-black bg-opacity-75 px-3 py-1 text-xs">
                      SOLD
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-1">{artwork.title}</h3>
                  <p className="text-sm text-light-muted mb-2">{artwork.medium}</p>
                  <p className="text-sm text-light-muted mb-2">{artwork.size} • {artwork.year}</p>
                  {artwork.available && artwork.price && (
                    <p className="text-white font-medium">{artwork.price}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox/Modal */}
        {selectedArtwork && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedArtwork(null)}
          >
            <div
              className="bg-dark-card max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <div className="sticky top-0 bg-dark-card p-4 flex justify-end border-b border-dark-border">
                <button
                  onClick={() => setSelectedArtwork(null)}
                  className="p-2 hover:bg-dark-hover transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-6">
                {/* Image */}
                <div className="aspect-video bg-gradient-subtle mb-6 flex items-center justify-center text-muted">
                  <div className="text-center">
                    <p>Full Image Placeholder</p>
                    <p className="text-sm mt-2">{selectedArtwork.title}</p>
                  </div>
                </div>

                {/* Details */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">{selectedArtwork.title}</h2>
                    <p className="text-light-muted mb-4">{selectedArtwork.description}</p>

                    <div className="space-y-2 text-sm">
                      <p><span className="text-muted">Medium:</span> {selectedArtwork.medium}</p>
                      <p><span className="text-muted">Size:</span> {selectedArtwork.size}</p>
                      <p><span className="text-muted">Year:</span> {selectedArtwork.year}</p>
                      {selectedArtwork.price && (
                        <p><span className="text-muted">Price:</span> {selectedArtwork.price}</p>
                      )}
                      <p>
                        <span className="text-muted">Status:</span> {' '}
                        {selectedArtwork.available ? 'Available' : 'Sold'}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between">
                    {selectedArtwork.available && (
                      <div className="space-y-4">
                        <p className="text-sm text-light-muted">
                          Interested in this piece? Purchase directly through my Etsy shop
                          or contact me for inquiries about commissions and custom work.
                        </p>

                        <div className="flex flex-col gap-3">
                          {selectedArtwork.etsyUrl && (
                            <a
                              href={selectedArtwork.etsyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-black hover:bg-transparent hover:text-white border border-white transition-all duration-300"
                            >
                              <ShoppingBag className="w-5 h-5" />
                              Purchase on Etsy
                            </a>
                          )}

                          <Link
                            href="/contact"
                            className="flex items-center justify-center gap-2 px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300"
                          >
                            Inquire About This Piece
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Commission CTA */}
        <div className="mt-20 text-center py-12 border-t border-dark-border">
          <h2 className="text-3xl font-bold mb-4">COMMISSION WORK</h2>
          <p className="text-light-muted mb-8 max-w-2xl mx-auto">
            Interested in commissioning a custom piece? I create personalized artwork
            tailored to your vision and space.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-black hover:bg-transparent hover:text-white border border-white transition-all duration-300 font-medium"
          >
            START A COMMISSION
          </Link>
        </div>
      </div>
    </div>
  );
}