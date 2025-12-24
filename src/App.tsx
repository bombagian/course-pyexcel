import React from 'react'
import ErrorBoundary from './components/ErrorBoundary'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Personas from './components/Personas'
import Program from './components/Program'
import Corporate from './components/Corporate'
import SignupForm from './components/SignupForm'
import Footer from './components/Footer'

export default function App() {
  return (
    <ErrorBoundary>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main id="main-content">
          <Hero />
          <Benefits />
          <Personas />
          <Program />
          <Corporate />
          <SignupForm />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  )
}
