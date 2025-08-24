import React from 'react';

interface MFEBoundaryProps {
  children: React.ReactNode;
}

interface MFEBoundaryState {
  hasError: boolean;
}

class MFEBoundary extends React.Component<MFEBoundaryProps, MFEBoundaryState> {
  constructor(props: MFEBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    console.error('Error loading MFE:', error);
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // You can also log the error to an error reporting service
    console.error('MFE Component did catch:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div
          style={{
            padding: '20px',
            background: '#ffcdd2',
            border: '2px solid #b71c1c',
            color: '#b71c1c',
          }}>
          <h3>Something went wrong.</h3>
          <p>
            This part of the application could not be loaded. Please try again
            later.
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default MFEBoundary;
