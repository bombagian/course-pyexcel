import React, { useState } from 'react'
import { Mail, Linkedin, Twitter, Github } from 'lucide-react'
import PrivacyPolicy from './PrivacyPolicy'

export default function Footer() {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false)

  return (
    <>
    <footer className="relative py-16 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="font-bold text-background">Py</span>
              </div>
              <div>
                <span className="font-bold text-lg text-text">Python</span>
                <span className="font-light text-lg text-primary"> in Excel</span>
              </div>
            </a>
            <p className="text-textSecondary max-w-md mb-6">
              Transform your Excel skills with Python. Our blended learning program combines 
              online flexibility with in-person accountability for maximum results.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Twitter, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Github, href: '#' },
                { icon: Mail, href: 'mailto:hello@pythoninexcel.com' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-textSecondary hover:text-primary hover:border-primary/30 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-text mb-4">Program</h4>
            <ul className="space-y-3">
              {['Curriculum', 'Schedule', 'Pricing', 'FAQ'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-textSecondary hover:text-primary transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-text mb-4">Company</h4>
            <ul className="space-y-3">
              {['About Us', 'Corporate Training', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-textSecondary hover:text-primary transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={() => setShowPrivacyPolicy(true)}
                  className="text-textSecondary hover:text-primary transition-colors duration-300"
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-textSecondary">
            © 2025 Python in Excel. All rights reserved.
          </p>
          <p className="text-sm text-textSecondary">
            Made with 💚 for data enthusiasts
          </p>
        </div>
      </div>
    </footer>

    <PrivacyPolicy isOpen={showPrivacyPolicy} onClose={() => setShowPrivacyPolicy(false)} />
    </>
  )
}
