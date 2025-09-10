import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Application error caught by boundary:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className={"min-h-screen flex items-center justify-center"} style={{ fontFamily: 'Inter, sans-serif' }}>
          <div className={"text-center p-8"}>
            <h1 className={"text-4xl font-bold mb-4"} style={{ color: '#2C3E50' }}>
              The UX Suite
            </h1>
            <p className={"text-lg mb-6"} style={{ color: '#34495E' }}>
              We're getting everything ready for you...
            </p>
            <button 
              onClick={() => window.location.reload()}
              className={"px-6 py-3 rounded-lg transition-all duration-200 hover:scale-105"}
              style={{ 
                backgroundColor: '#00BCD4',
                color: 'white',
                fontFamily: 'Montserrat',
                fontWeight: '600',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;