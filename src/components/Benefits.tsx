import React from 'react'
import { Zap, Clock, Users, TrendingUp, Shield, Sparkles, Monitor, Calendar } from 'lucide-react'

const benefits = [
  {
    icon: Clock,
    title: 'Turn Time into Insight',
    description: 'Automate repetitive Excel tasks that currently eat up your time. Focus on analysis, not data entry.',
    gradient: 'from-primary to-secondary',
  },
  {
    icon: TrendingUp,
    title: 'Accelerate Your Career',
    description: 'Python skills are the #1 most requested technical skill. Stand out in your next performance review.',
    gradient: 'from-secondary to-accent',
  },
  {
    icon: Users,
    title: 'Learn with Accountability',
    description: 'Weekly in-person sessions keep you on track. No more abandoned online courses.',
    gradient: 'from-accent to-primary',
  },
  {
    icon: Monitor,
    title: 'Flexible Online Learning',
    description: 'Access video lessons, exercises, and resources 24/7. Learn at your own pace between sessions.',
    gradient: 'from-primary to-accent',
  },
  {
    icon: Shield,
    title: 'No Coding Background Needed',
    description: 'Start from zero. Our curriculum is designed for Excel users, not programmers.',
    gradient: 'from-secondary to-primary',
  },
  {
    icon: Sparkles,
    title: 'Real-World Projects',
    description: 'Apply skills to your actual work. Bring your own datasets and leave with working solutions.',
    gradient: 'from-accent to-secondary',
  },
]

export default function Benefits() {
  return (
    <section id="benefits" className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] -translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface/80 border border-border backdrop-blur-sm mb-6">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm text-textSecondary">Why Choose Us</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-text">The </span>
            <span className="text-gradient">Blended Advantage</span>
          </h2>
          <p className="text-xl text-textSecondary max-w-2xl mx-auto">
            Online flexibility meets in-person accountability. Get the best of both worlds with our unique learning approach.
          </p>
        </div>

        {/* Blended Learning Highlight */}
        <div className="relative mb-20">
          <div className="relative bg-surface/60 rounded-2xl border border-border p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Online Learning */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 mb-6">
                  <Monitor className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-text mb-4">Online Resources</h3>
                <p className="text-textSecondary mb-6">
                  Access our comprehensive library of video lessons, interactive exercises, and downloadable templates. 
                  Learn at your own pace, whenever and wherever works for you.
                </p>
                <ul className="space-y-3">
                  {['Self-paced video lessons', 'Interactive coding exercises', 'Downloadable templates', '24/7 access'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-textSecondary">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* In-Person Sessions */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-secondary/20 mb-6">
                  <Calendar className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-text mb-4">Weekly In-Person Sessions</h3>
                <p className="text-textSecondary mb-6">
                  Join our expert instructors and fellow learners every week for hands-on workshops. 
                  Get your questions answered, work through challenges, and stay accountable.
                </p>
                <ul className="space-y-3">
                  {['Live instructor support', 'Peer collaboration', 'Real-time Q&A', 'Networking opportunities'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-textSecondary">
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group h-full bg-surface/40 rounded-xl border border-border p-6 transition-all duration-300 hover:border-primary/50 hover:bg-surface/60"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-text mb-2">{benefit.title}</h3>
              <p className="text-textSecondary text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
