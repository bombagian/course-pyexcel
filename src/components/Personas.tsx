import React from 'react'
import { TrendingUp, RefreshCw, Target, Zap } from 'lucide-react'

const personas = [
  {
    id: 1,
    title: 'The Ambitious Analyst',
    subtitle: 'Ready to Level Up',
    icon: TrendingUp,
    gradient: 'from-accent to-primary',
    painPoints: [
      'Uses Excel daily for reports and analysis',
      'Watches colleagues accomplish tasks faster',
      'Wants to become the go-to data person on their team',
    ],
  },
  {
    id: 2,
    title: 'The Career Changer',
    subtitle: 'Proving New Skills',
    icon: RefreshCw,
    gradient: 'from-secondary to-primary',
    painPoints: [
      'Transitioning from teaching, admin, retail, or other fields',
      'Sees "Excel proficiency" in job postings and wonders if they qualify',
      'Needs affordable, portfolio-worthy training',
    ],
  },
  {
    id: 3,
    title: 'The Reluctant Data Person',
    subtitle: 'Just Needs It To Work',
    icon: Target,
    gradient: 'from-primary to-secondary',
    painPoints: [
      'Job became data-heavy unexpectedly',
      'Cobbled together skills from YouTube',
      'Dreads monthly reporting cycles',
    ],
  },
  {
    id: 4,
    title: 'The Future-Focused Pro',
    subtitle: 'AI-Ready Tomorrow',
    icon: Zap,
    gradient: 'from-secondary to-accent',
    painPoints: [
      'Understands AI is transforming the workplace',
      'Wants to work alongside AI tools, not be replaced by them',
      'Sees Python + Excel as career insurance',
    ],
  },
]

export default function Personas() {
  return (
    <section id="personas" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/30 to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface/80 border border-border backdrop-blur-sm mb-6">
            <Target className="w-4 h-4 text-primary" />
            <span className="text-sm text-textSecondary">Who It's For</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-text">Built for </span>
            <span className="text-gradient">Ambitious Professionals</span>
          </h2>
          <p className="text-xl text-textSecondary max-w-2xl mx-auto">
            Whether you're leveling up, pivoting careers, or future-proofing your skills, this course meets you where you are.
          </p>
        </div>

        {/* Persona Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {personas.map((persona, index) => (
            <div
              key={persona.id}
              className="h-full bg-surface/60 rounded-2xl border border-border overflow-hidden transition-all duration-300 hover:border-primary/50 flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="p-6 pb-4">
                <div className="flex items-start gap-4 mb-4">
                  {/* Icon Badge */}
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <persona.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text">{persona.title}</h3>
                    <p className="text-sm text-textSecondary">{persona.subtitle}</p>
                  </div>
                </div>
                </div>

                {/* Content */}
                <div className="px-6 pb-6 flex-grow">
                  {/* Pain Points */}
                  <ul className="space-y-2">
                    {persona.painPoints.map((point, i) => (
                      <li key={i} className="text-sm text-textSecondary flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-primary/50 mt-2 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
