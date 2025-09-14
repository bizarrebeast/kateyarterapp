'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Music, Palette, Video, User, Mail, FileText, Home } from 'lucide-react';
import { cn } from '@/utils/cn';

// Navigation items for Kate Yarter portfolio
const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/music', label: 'Music', icon: Music },
  { href: '/artwork', label: 'Artwork', icon: Palette },
  { href: '/videos', label: 'Videos', icon: Video },
  { href: '/about', label: 'About', icon: User },
  { href: '/contact', label: 'Contact', icon: Mail },
  { href: '/press-kit', label: 'Press Kit', icon: FileText },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black border-b border-dark-border z-40" ref={menuRef}>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - minimalist text */}
          <Link href="/" className="group">
            <h1 className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity">
              KATE YARTER
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-white",
                  pathname === item.href ? "text-white" : "text-muted"
                )}
              >
                {item.label.toUpperCase()}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:opacity-80 transition-opacity"
            aria-label="Menu"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={cn(
          'md:hidden absolute top-full left-0 right-0 bg-black border-b border-dark-border transition-all duration-300 ease-in-out overflow-hidden',
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 border-0'
        )}
      >
        <div className="px-4 py-4">
          <div className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-3 py-3 text-base font-medium transition-all duration-300",
                    pathname === item.href
                      ? "bg-white text-black"
                      : "text-white hover:bg-dark-hover"
                  )}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}