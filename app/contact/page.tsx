'use client';

import { useState } from 'react';
import { Mail, Music, Palette, Video, MessageSquare, Send, Instagram, Twitter, ExternalLink } from 'lucide-react';

type InquiryType = 'music' | 'art' | 'performance' | 'collaboration' | 'general';

export default function ContactPage() {
  const [inquiryType, setInquiryType] = useState<InquiryType>('general');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    budget: '',
    timeline: '',
  });

  const inquiryTypes = [
    { value: 'music', label: 'Music Production', icon: Music },
    { value: 'art', label: 'Art Commission', icon: Palette },
    { value: 'performance', label: 'Live Performance', icon: Video },
    { value: 'collaboration', label: 'Collaboration', icon: MessageSquare },
    { value: 'general', label: 'General Inquiry', icon: Mail },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', { inquiryType, ...formData });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-black text-white pt-36 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">CONTACT</h1>
          <p className="text-lg text-light-muted">
            Let's create something extraordinary together
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Quick Contact */}
          <div className="bg-dark-card border border-dark-border p-6">
            <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>

            <div className="space-y-4 mb-6">
              <div>
                <p className="text-sm text-muted mb-1">Email</p>
                <a href="mailto:contact@kateyarter.com" className="hover:text-light-muted transition-colors">
                  contact@kateyarter.com
                </a>
              </div>

              <div>
                <p className="text-sm text-muted mb-1">Label</p>
                <a href="https://honeyhighrecords.com" target="_blank" rel="noopener noreferrer" className="hover:text-light-muted transition-colors">
                  Honey High Records
                </a>
              </div>
            </div>

            <div>
              <p className="text-sm text-muted mb-3">Connect on Social</p>
              <div className="flex gap-3">
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

          {/* Services Info */}
          <div className="bg-dark-card border border-dark-border p-6">
            <h2 className="text-2xl font-semibold mb-4">Services Available</h2>

            <ul className="space-y-3 text-light-muted">
              <li className="flex items-start gap-2">
                <span className="text-white mt-1">•</span>
                <span>Original music composition for games, films, and media</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white mt-1">•</span>
                <span>Custom artwork and commissioned paintings</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white mt-1">•</span>
                <span>Live music performances and events</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white mt-1">•</span>
                <span>Commercial licensing for existing music</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white mt-1">•</span>
                <span>Creative collaborations and partnerships</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-dark-card border border-dark-border p-8">
          <h2 className="text-3xl font-bold mb-6">Send a Message</h2>

          {/* Inquiry Type Selector */}
          <div className="mb-6">
            <label className="block text-sm text-muted mb-3">What can I help you with?</label>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {inquiryTypes.map(type => {
                const Icon = type.icon;
                return (
                  <button
                    key={type.value}
                    onClick={() => setInquiryType(type.value as InquiryType)}
                    className={`p-3 border transition-all duration-300 flex flex-col items-center gap-2 ${
                      inquiryType === type.value
                        ? 'bg-white text-black border-white'
                        : 'border-white text-white hover:bg-white hover:text-black'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-xs">{type.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm text-muted mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-white focus:border-white text-white"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-muted mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-white focus:border-white text-white"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm text-muted mb-2">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black border border-white focus:border-white text-white"
              />
            </div>

            {/* Conditional fields based on inquiry type */}
            {(inquiryType === 'music' || inquiryType === 'art' || inquiryType === 'performance') && (
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="budget" className="block text-sm text-muted mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-white focus:border-white text-white"
                  >
                    <option value="">Select budget</option>
                    <option value="under-1000">Under $1,000</option>
                    <option value="1000-5000">$1,000 - $5,000</option>
                    <option value="5000-10000">$5,000 - $10,000</option>
                    <option value="10000-plus">$10,000+</option>
                    <option value="discuss">Prefer to discuss</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm text-muted mb-2">
                    Timeline
                  </label>
                  <input
                    type="text"
                    id="timeline"
                    name="timeline"
                    placeholder="e.g., 2-3 months"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-white focus:border-white text-white placeholder-muted"
                  />
                </div>
              </div>
            )}

            <div>
              <label htmlFor="message" className="block text-sm text-muted mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black border border-white focus:border-white text-white resize-none"
                placeholder={
                  inquiryType === 'music'
                    ? "Tell me about your project, genre preferences, and any specific requirements..."
                    : inquiryType === 'art'
                    ? "Describe your vision, preferred medium, size, and any reference materials..."
                    : inquiryType === 'performance'
                    ? "Provide event details, date, location, and performance requirements..."
                    : inquiryType === 'collaboration'
                    ? "Share your ideas and how you envision our collaboration..."
                    : "How can I help you?"
                }
              />
            </div>

            <button
              type="submit"
              className="w-full md:w-auto px-8 py-3 bg-white text-black hover:bg-transparent hover:text-white border border-white transition-all duration-300 font-medium flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Send Message
            </button>
          </form>
        </div>

        {/* Response Time Notice */}
        <div className="mt-8 text-center text-sm text-muted">
          <p>I typically respond within 2-3 business days.</p>
          <p>For urgent inquiries, please include "URGENT" in your subject line.</p>
        </div>
      </div>
    </div>
  );
}