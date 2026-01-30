import React from 'react'
import { BookOpen, Code, BarChart3, Rocket, CheckCircle, Clock, Calendar, Award } from 'lucide-react'

const modules = [
  {
    module: '1',
    title: 'Python Foundations in Excel',
    icon: Code,
    topics: ['Setting up Python in Excel', 'Variables and data types', 'Basic operations and functions', 'Your first automation script'],
    badgeClasses: 'bg-primary/10 border-primary/20',
    textClass: 'text-primary',
    iconGradient: 'from-primary to-primary/50',
    glowClass: 'bg-primary/20',
  },
  {
    module: '2',
    title: 'Data Manipulation with Pandas',
    icon: BarChart3,
    topics: ['Loading and cleaning data', 'Filtering and sorting', 'Grouping and aggregation', 'Merging multiple datasets'],
    badgeClasses: 'bg-secondary/10 border-secondary/20',
    textClass: 'text-secondary',
    iconGradient: 'from-secondary to-secondary/50',
    glowClass: 'bg-secondary/20',
  },
  {
    module: '3',
    title: 'Advanced Analysis & Visualization',
    icon: BookOpen,
    topics: ['Statistical analysis', 'Creating charts with Matplotlib', 'Interactive visualizations', 'Building dashboards'],
    badgeClasses: 'bg-accent/10 border-accent/20',
    textClass: 'text-accent',
    iconGradient: 'from-accent to-accent/50',
    glowClass: 'bg-accent/20',
  },
  {
    module: '4',
    title: 'Real-World Applications',
    icon: Rocket,
    topics: ['Automating reports', 'Financial modeling', 'Forecasting and predictions', 'Capstone project'],
    badgeClasses: 'bg-success/10 border-success/20',
    textClass: 'text-success',
    iconGradient: 'from-success to-success/50',
    glowClass: 'bg-success/20',
  },
]

const programDetails = [
  { icon: Clock, label: 'Duration', value: '6 Weeks' },
  { icon: Calendar, label: 'Weekly Sessions', value: '2 Hours In-Person' },
  { icon: BookOpen, label: 'Online Content', value: 'Video Lessons' },
  { icon: Award, label: 'Upon Completion', value: 'Certificate' },
]

export default function Program() {
  return (
    <section id="program" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/20 to-background" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-t from-primary/5 to-transparent rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface/80 border border-border backdrop-blur-sm mb-6">
            <BookOpen className="w-4 h-4 text-primary" />
            <span className="text-sm text-textSecondary">Curriculum</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-text">Your </span>
            <span className="text-gradient">6-Week Journey</span>
          </h2>
          <p className="text-xl text-textSecondary max-w-2xl mx-auto">
            A structured path from Excel user to Python-powered data professional. Each module builds on the last.
          </p>
        </div>

        {/* Program Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {programDetails.map((detail, index) => (
            <div
              key={index}
              className="bg-surface/60 backdrop-blur-xl rounded-xl border border-border p-6 text-center"
            >
              <detail.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-text mb-1">{detail.value}</div>
              <div className="text-sm text-textSecondary">{detail.label}</div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent hidden md:block" />

          {/* Modules */}
          <div className="space-y-12">
            {modules.map((module, index) => (
              <div
                key={index}
                className={`relative flex flex-col lg:flex-row gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 lg:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-4 border-primary hidden md:block" style={{ top: '2rem' }} />

                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'}`}>
                  <div className="ml-16 lg:ml-0">
                    {/* Card */}
                    <div className="bg-surface/60 rounded-2xl border border-border p-8 transition-all duration-300 hover:border-primary/50">
                      {/* Module Badge */}
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${module.badgeClasses} mb-4`}>
                        <span className={`text-sm font-semibold ${module.textClass}`}>Module {module.module}</span>
                      </div>

                      {/* Header */}
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <module.icon className="w-7 h-7 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-text">{module.title}</h3>
                        </div>
                      </div>

                      {/* Topics */}
                      <ul className="space-y-3">
                        {module.topics.map((topic, i) => (
                          <li key={i} className="flex items-center gap-3">
                            <CheckCircle className={`w-5 h-5 ${module.textClass} flex-shrink-0`} />
                            <span className="text-textSecondary">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block flex-1" />
              </div>
            ))}
          </div>
        </div>

        {/* What You'll Build */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-text text-center mb-10">What You'll Build</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Automated Reports', desc: 'Generate weekly reports with one click' },
              { title: 'Data Dashboards', desc: 'Interactive visualizations in Excel' },
              { title: 'Financial Models', desc: 'Dynamic forecasting tools' },
              { title: 'Custom Tools', desc: 'Solutions for your specific needs' },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-surface/60 backdrop-blur-xl rounded-xl border border-border p-6 text-center hover:border-primary/30 transition-colors duration-300"
              >
                <div className="text-4xl mb-4">
                  {['📊', '📈', '💰', '🛠️'][index]}
                </div>
                <h4 className="text-lg font-semibold text-text mb-2">{item.title}</h4>
                <p className="text-sm text-textSecondary">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
