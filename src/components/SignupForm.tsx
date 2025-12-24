import React, { useState } from 'react'
import { Mail, User, CheckCircle, ArrowRight, Sparkles } from 'lucide-react'
import { submitLead } from '../lib/supabase'
import PrivacyPolicy from './PrivacyPolicy'

export default function SignupForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest_type: 'individual' as 'individual' | 'corporate',
    consent: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.consent) return

    setIsSubmitting(true)
    const result = await submitLead({
      name: formData.name,
      email: formData.email,
      interest_type: formData.interest_type,
      consent: formData.consent,
    })

    setIsSubmitting(false)
    setSubmitStatus(result.success ? 'success' : 'error')
    
    if (result.success) {
      setFormData({
        name: '',
        email: '',
        interest_type: 'individual',
        consent: false,
      })
    }
  }

  return (
    <section id="signup" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Card */}
          <div className="relative bg-surface/80 rounded-2xl border border-border overflow-hidden">
            {/* Header */}
            <div className="bg-surface/60 p-8 text-center border-b border-border">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/50 border border-border backdrop-blur-sm mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm text-textSecondary">Limited Spots Available</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                <span className="text-text">Ready to </span>
                <span className="text-gradient">Transform Your Skills?</span>
              </h2>
              <p className="text-lg text-textSecondary max-w-xl mx-auto">
                Join the waitlist for our next cohort. Be the first to know when enrollment opens.
              </p>
            </div>

            {/* Form */}
            <div className="p-8">
              {submitStatus === 'success' ? (
                <div className="text-center py-8">
                  <div className="w-20 h-20 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-success" />
                  </div>
                  <h3 className="text-2xl font-bold text-text mb-3">You're on the List! 🎉</h3>
                  <p className="text-textSecondary max-w-md mx-auto">
                    Check your email for a confirmation and some free resources to get you started with Python in Excel.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-text mb-2">Full Name *</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-textSecondary" />
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full pl-12 pr-4 py-4 bg-background/50 border border-border rounded-xl text-text placeholder-textSecondary focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                          placeholder="Your name"
                          required
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-text mb-2">Email Address *</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-textSecondary" />
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-12 pr-4 py-4 bg-background/50 border border-border rounded-xl text-text placeholder-textSecondary focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                          placeholder="you@email.com"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Interest Type */}
                  <div>
                    <label className="block text-sm font-medium text-text mb-3">I'm interested in *</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        { value: 'individual', label: 'Individual Learning', desc: 'For myself' },
                        { value: 'corporate', label: 'Team Training', desc: 'For my organization' },
                      ].map((option) => (
                        <label
                          key={option.value}
                          className={`relative flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                            formData.interest_type === option.value
                              ? 'border-primary bg-primary/5'
                              : 'border-border hover:border-primary/30'
                          }`}
                        >
                          <input
                            type="radio"
                            name="interest_type"
                            value={option.value}
                            checked={formData.interest_type === option.value}
                            onChange={(e) => setFormData({ ...formData, interest_type: e.target.value as 'individual' | 'corporate' })}
                            className="sr-only"
                          />
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                            formData.interest_type === option.value
                              ? 'border-primary'
                              : 'border-border'
                          }`}>
                            {formData.interest_type === option.value && (
                              <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                            )}
                          </div>
                          <div>
                            <div className="font-medium text-text">{option.label}</div>
                            <div className="text-sm text-textSecondary">{option.desc}</div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Consent */}
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <div className="relative mt-1">
                      <input
                        type="checkbox"
                        checked={formData.consent}
                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        className="sr-only"
                        required
                      />
                      <div className={`w-5 h-5 rounded border-2 transition-all duration-300 flex items-center justify-center ${
                        formData.consent 
                          ? 'bg-primary border-primary' 
                          : 'border-border group-hover:border-primary/50'
                      }`}>
                        {formData.consent && <CheckCircle className="w-3 h-3 text-background" />}
                      </div>
                    </div>
                    <span className="text-sm text-textSecondary">
                      I agree to receive emails about the Python in Excel program, including course updates,
                      tips, and promotional content. You can unsubscribe at any time.
                      <button
                        type="button"
                        onClick={() => setShowPrivacyPolicy(true)}
                        className="text-primary hover:underline ml-1"
                      >
                        Privacy Policy
                      </button>
                    </span>
                  </label>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.consent}
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-background font-semibold rounded-xl transition-all duration-300 hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    <span>
                      {isSubmitting ? 'Joining...' : 'Join the Waitlist'}
                    </span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  {submitStatus === 'error' && (
                    <p className="text-error text-sm text-center">Something went wrong. Please try again.</p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <PrivacyPolicy isOpen={showPrivacyPolicy} onClose={() => setShowPrivacyPolicy(false)} />
    </section>
  )
}
