import React, { useState } from 'react'
import { ArrowRight, Play, Sparkles, TrendingUp, Clock, Users } from 'lucide-react'
import { submitLead } from '../lib/supabase'

export default function Hero() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleQuickSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)
    const result = await submitLead({
      name: '',
      email,
      interest_type: 'individual',
      consent: true,
    })

    setIsSubmitting(false)
    setSubmitStatus(result.success ? 'success' : 'error')
    if (result.success) {
      setEmail('')
      setTimeout(() => setSubmitStatus('idle'), 3000)
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,244,115,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,244,115,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] animate-float" style={{ animationDelay: '-3s' }} />

        {/* Floating Code Elements */}
        <div className="absolute top-32 left-[10%] text-primary/20 font-mono text-sm animate-float" style={{ animationDelay: '-1s' }}>
          import pandas as pd
        </div>
        <div className="absolute top-48 right-[15%] text-secondary/20 font-mono text-sm animate-float" style={{ animationDelay: '-2s' }}>
          =PY(df.describe())
        </div>
        <div className="absolute bottom-32 left-[20%] text-accent/20 font-mono text-sm animate-float" style={{ animationDelay: '-4s' }}>
          data.to_excel()
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface/80 border border-border backdrop-blur-sm mb-8 animate-fade-up">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-textSecondary">New: Blended Learning Program 2026</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <span className="text-text">Master </span>
            <span className="text-gradient">Python in Excel</span>
            <br />
            <span className="text-text">Transform Your </span>
            <span className="relative">
              <span className="text-primary">Data Skills</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path d="M2 10C50 2 150 2 198 10" stroke="url(#underline-gradient)" strokeWidth="3" strokeLinecap="round" />
                <defs>
                  <linearGradient id="underline-gradient" x1="0" y1="0" x2="200" y2="0">
                    <stop stopColor="#10f473" />
                    <stop offset="1" stopColor="#38bdf8" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-textSecondary max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Combine the flexibility of online learning with the accountability of weekly in-person sessions. 
            <span className="text-text font-medium"> Automate spreadsheets, analyze data, and accelerate your career.</span>
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-2 text-textSecondary">
              <Clock className="w-5 h-5 text-primary" />
              <span>8-Week Program</span>
            </div>
            <div className="flex items-center gap-2 text-textSecondary">
              <Users className="w-5 h-5 text-secondary" />
              <span>Small Group Sessions</span>
            </div>
            <div className="flex items-center gap-2 text-textSecondary">
              <TrendingUp className="w-5 h-5 text-accent" />
              <span>10x Productivity Gains</span>
            </div>
          </div>

          {/* Email Signup Form */}
          <form
            onSubmit={handleQuickSignup}
            className="max-w-lg mx-auto mb-8 animate-fade-up"
            style={{ animationDelay: '0.4s' }}
            aria-label="Email signup form"
          >
            <div className="relative flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-6 py-4 bg-surface/80 border border-border rounded-full text-text placeholder-textSecondary focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  required
                  aria-label="Email address"
                  aria-describedby={submitStatus !== 'idle' ? 'signup-status' : undefined}
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-background font-semibold rounded-full transition-all duration-300 hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-busy={isSubmitting}
              >
                <span>
                  {isSubmitting ? 'Joining...' : 'Join Waitlist'}
                </span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            {submitStatus === 'success' && (
              <p id="signup-status" className="mt-3 text-success text-sm" role="status" aria-live="polite">
                🎉 You're on the list! Check your email for next steps.
              </p>
            )}
            {submitStatus === 'error' && (
              <p id="signup-status" className="mt-3 text-error text-sm" role="alert" aria-live="assertive">
                Something went wrong. Please try again.
              </p>
            )}
          </form>

          {/* Secondary CTA */}
          <div className="flex flex-wrap justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <a
              href="#program"
              className="inline-flex items-center gap-2 px-6 py-3 text-textSecondary hover:text-text border border-border hover:border-primary/50 rounded-full transition-all duration-300 group"
            >
              <Play className="w-4 h-4 text-primary" />
              <span>See Program Details</span>
            </a>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="mt-20 relative animate-scale-in" style={{ animationDelay: '0.6s' }}>
          <div className="relative max-w-4xl mx-auto">
            {/* Main Visual Container */}
            <div className="relative bg-surface/80 rounded-2xl border border-border overflow-hidden shadow-xl">
              {/* Window Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-background/50 border-b border-border">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-error/80" />
                  <div className="w-3 h-3 rounded-full bg-warning/80" />
                  <div className="w-3 h-3 rounded-full bg-success/80" />
                </div>
                <span className="text-xs text-textSecondary ml-2">sales_analysis.xlsx — Python in Excel</span>
              </div>
              
              {/* Code Preview */}
              <div className="p-6 font-mono text-sm">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Python Code Side */}
                  <div className="space-y-2">
                    <div className="text-textSecondary text-xs mb-3">// Python Code</div>
                    <div><span className="text-accent">import</span> <span className="text-secondary">pandas</span> <span className="text-accent">as</span> <span className="text-secondary">pd</span></div>
                    <div><span className="text-accent">import</span> <span className="text-secondary">matplotlib.pyplot</span> <span className="text-accent">as</span> <span className="text-secondary">plt</span></div>
                    <div className="h-2" />
                    <div><span className="text-textSecondary"># Load Excel data directly</span></div>
                    <div><span className="text-text">df</span> <span className="text-accent">=</span> <span className="text-secondary">xl</span><span className="text-text">(</span><span className="text-primary">"A1:D100"</span><span className="text-text">)</span></div>
                    <div className="h-2" />
                    <div><span className="text-textSecondary"># Analyze and visualize</span></div>
                    <div><span className="text-text">summary</span> <span className="text-accent">=</span> <span className="text-text">df</span><span className="text-accent">.</span><span className="text-secondary">groupby</span><span className="text-text">(</span><span className="text-primary">'Region'</span><span className="text-text">)</span><span className="text-accent">.</span><span className="text-secondary">sum</span><span className="text-text">()</span></div>
                    <div><span className="text-text">summary</span><span className="text-accent">.</span><span className="text-secondary">plot</span><span className="text-text">(</span><span className="text-text">kind</span><span className="text-accent">=</span><span className="text-primary">'bar'</span><span className="text-text">)</span></div>
                  </div>
                  
                  {/* Output Side */}
                  <div className="bg-background/50 rounded-xl p-4">
                    <div className="text-textSecondary text-xs mb-3">// Output</div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-textSecondary">Region</span>
                        <span className="text-textSecondary">Revenue</span>
                      </div>
                      <div className="h-px bg-border" />
                      <div className="flex justify-between">
                        <span className="text-text">North</span>
                        <span className="text-primary font-semibold">$2.4M</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-text">South</span>
                        <span className="text-secondary font-semibold">$1.8M</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-text">East</span>
                        <span className="text-accent font-semibold">$2.1M</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-text">West</span>
                        <span className="text-success font-semibold">$1.9M</span>
                      </div>
                      <div className="h-2" />
                      <div className="flex gap-1 h-20 items-end">
                        <div className="flex-1 bg-gradient-to-t from-primary to-primary/50 rounded-t" style={{ height: '100%' }} />
                        <div className="flex-1 bg-gradient-to-t from-secondary to-secondary/50 rounded-t" style={{ height: '75%' }} />
                        <div className="flex-1 bg-gradient-to-t from-accent to-accent/50 rounded-t" style={{ height: '87%' }} />
                        <div className="flex-1 bg-gradient-to-t from-success to-success/50 rounded-t" style={{ height: '79%' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
