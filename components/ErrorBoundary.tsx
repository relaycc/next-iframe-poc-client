import React from "react";

export default class ErrorBoundary extends React.Component {
  // @ts-ignore
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // @ts-ignore
  static getDerivedStateFromError(error) {
    console.log("getDerivedStateFromError", error);
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  // @ts-ignore
  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error("react-error-boundary", error, errorInfo);
  }

  render() {
    // @ts-ignore
    return this.props.children;
  }
}
