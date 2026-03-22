import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Component Error Caught in Portfolio:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-screen min-h-[50vh] flex flex-col items-center justify-center p-10 bg-black text-center">
          <h2 className="text-2xl font-bold text-red-400 mb-2">Engineering UI Crash Detected</h2>
          <p className="text-zinc-400 max-w-md text-sm mb-6">
            Even the best optimized React apps hit edge cases. The ErrorBoundary has caught a rendering failure gracefully. 
          </p>
          <button 
            className="px-6 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition"
            onClick={() => window.location.reload()}
          >
            Reload Portfolio
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
