'use client';

import { Component, ReactNode } from 'react';
import { toast } from 'sonner';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: string;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: undefined };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true, error: error.message || 'Something went wrong!' };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
    toast.error(error.message || 'Something went wrong!');
  }

  resetError = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    console.log('Rendering ErrorBoundary, hasError:', this.state.hasError);

    if (this.state.hasError) {
      return (
        <div className="flex h-screen items-center justify-center flex-col">
          <h2 className="text-2xl font-bold text-red-600">
            Oops! Something went wrong.
          </h2>
          <p className="text-gray-500">{this.state.error}</p>
          <button
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
            onClick={this.resetError}
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
