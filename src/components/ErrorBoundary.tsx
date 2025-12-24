import React, { Component, ErrorInfo, ReactNode } from 'react'
import { AlertCircle } from 'lucide-react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className="min-h-screen bg-background flex items-center justify-center px-4">
          <div className="max-w-md w-full">
            <div className="bg-surface/80 backdrop-blur-xl rounded-2xl border border-border p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-error/20 flex items-center justify-center mx-auto mb-6">
                <AlertCircle className="w-8 h-8 text-error" />
              </div>
              <h1 className="text-2xl font-bold text-text mb-4">Something went wrong</h1>
              <p className="text-textSecondary mb-6">
                We're sorry, but something unexpected happened. Please try refreshing the page.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-3 bg-primary text-background font-semibold rounded-full hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
              >
                Refresh Page
              </button>
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <div className="mt-6 p-4 bg-background/50 rounded-xl text-left">
                  <p className="text-xs text-error font-mono mb-2">
                    {this.state.error.toString()}
                  </p>
                  <pre className="text-xs text-textSecondary overflow-auto">
                    {this.state.error.stack}
                  </pre>
                </div>
              )}
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
