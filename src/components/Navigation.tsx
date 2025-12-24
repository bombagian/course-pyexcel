import React, { useState, useEffect } from 'react'
import { Menu, X, Zap } from 'lucide-react'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#benefits', label: 'Benefits' },
    { href: '#personas', label: 'Who It\'s For' },
    { href: '#program', label: 'Program' },
    { href: '#corporate', label: 'Corporate' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/90 backdrop-blur-xl border-b border-border shadow-2xl shadow-primary/5'
          : 'bg-transparent'
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group" aria-label="Python in Excel home">
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <span className="font-bold text-background text-lg">Py</span>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-primary to-secondary rounded-xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-300" />
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-xl text-text">Python</span>
              <span className="font-light text-xl text-primary"> in Excel</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-textSecondary hover:text-primary transition-colors duration-300 text-sm font-medium relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="#signup"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-background font-semibold rounded-full transition-all duration-300 hover:bg-primary/90"
            >
              <span>Get Started</span>
              <Zap className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-textSecondary hover:text-primary transition-colors"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden absolute top-full left-0 right-0 bg-surface/95 backdrop-blur-xl border-b border-border transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-textSecondary hover:text-primary transition-colors duration-300 text-lg font-medium py-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#signup"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block w-full text-center px-6 py-3 bg-primary text-background font-semibold rounded-full mt-4"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  )
}
