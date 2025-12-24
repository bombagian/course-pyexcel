import React, { useState } from 'react'
import { Building2, Users, Settings, Award, CheckCircle, ArrowRight, Briefcase } from 'lucide-react'
import { submitLead } from '../lib/supabase'

const corporateBenefits = [
  {
    icon: Settings,
    title: 'Customized Curriculum',
    description: 'Tailor the program to your industry, tools, and specific business challenges.',
  },
  {
    icon: Users,
    title: 'Team Alignment',
    description: 'Get your entire team speaking the same data language and using consistent methods.',
  },
  {
    icon: Briefcase,
    title: 'On-Site Options',
    description: 'We can bring the in-person sessions to your office for maximum convenience.',
  },
]

export default function Corporate() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company_name: '',
    team_size: '',
    message: '',
    consent: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.consent) return

    setIsSubmitting(true)
    const result = await submitLead({
      name: formData.name,
      email: formData.email,
      interest_type: 'corporate',
      company_name: formData.company_name,
      team_size: formData.team_size,
      message: formData.message,
      consent: formData.consent,
    })

    setIsSubmitting(false)
    setSubmitStatus(result.success ? 'success' : 'error')
    
    if (result.success) {
      setFormData({
        name: '',
        email: '',
        company_name: '',
        team_size: '',
        message: '',
        consent: false,
      })
    }
  }

  return (
    <section id="corporate" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/30 to-background" />
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[150px] -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface/80 border border-border backdrop-blur-sm mb-6">
            <Building2 className="w-4 h-4 text-secondary" />
            <span className="text-sm text-textSecondary">Enterprise Solutions</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-text">Upskill Your </span>
            <span className="text-gradient">Entire Team</span>
          </h2>
          <p className="text-xl text-textSecondary max-w-2xl mx-auto">
            Transform your organization's data capabilities with customized corporate training programs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Benefits */}
          <div>
            <h3 className="text-2xl font-bold text-text mb-8">Why Corporate Training?</h3>
            <div className="space-y-6">
              {corporateBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group flex gap-4 p-4 rounded-xl bg-surface/40 border border-border hover:border-secondary/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-6 h-6 text-background" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-text mb-1">{benefit.title}</h4>
                    <p className="text-textSecondary text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-3xl blur-2xl" />
            <div className="relative bg-surface/90 backdrop-blur-xl rounded-2xl border border-border p-8">
              <h3 className="text-2xl font-bold text-text mb-2">Request a Consultation</h3>
              <p className="text-textSecondary mb-8">Tell us about your team and we'll create a custom proposal.</p>

              {submitStatus === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-success" />
                  </div>
                  <h4 className="text-xl font-bold text-text mb-2">Thank You!</h4>
                  <p className="text-textSecondary">We'll be in touch within 24 hours to discuss your team's needs.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-text mb-2">Your Name *</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl text-text placeholder-textSecondary focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all duration-300"
                        placeholder="John Smith"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text mb-2">Work Email *</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl text-text placeholder-textSecondary focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all duration-300"
                        placeholder="john@company.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-text mb-2">Company Name *</label>
                      <input
                        type="text"
                        value={formData.company_name}
                        onChange={(e) => setFormData({ ...formData, company_name: e.target.value })}
                        className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl text-text placeholder-textSecondary focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all duration-300"
                        placeholder="Acme Inc."
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text mb-2">Team Size *</label>
                      <select
                        value={formData.team_size}
                        onChange={(e) => setFormData({ ...formData, team_size: e.target.value })}
                        className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl text-text focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all duration-300"
                        required
                      >
                        <option value="">Select size</option>
                        <option value="5-10">5-10 people</option>
                        <option value="11-25">11-25 people</option>
                        <option value="26-50">26-50 people</option>
                        <option value="50+">50+ people</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text mb-2">Tell us about your needs</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl text-text placeholder-textSecondary focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all duration-300 resize-none"
                      placeholder="What challenges is your team facing? What outcomes are you hoping to achieve?"
                    />
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
                          ? 'bg-secondary border-secondary' 
                          : 'border-border group-hover:border-secondary/50'
                      }`}>
                        {formData.consent && <CheckCircle className="w-3 h-3 text-background" />}
                      </div>
                    </div>
                    <span className="text-sm text-textSecondary">
                      I agree to receive communications about corporate training programs. 
                      We respect your privacy and will never share your information.
                    </span>
                  </label>

                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.consent}
                    className="w-full relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-secondary to-accent text-background font-semibold rounded-xl overflow-hidden group transition-all duration-300 hover:shadow-xl hover:shadow-secondary/30 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10">
                      {isSubmitting ? 'Submitting...' : 'Request Consultation'}
                    </span>
                    <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
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
    </section>
  )
}
