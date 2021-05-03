import { render } from '@testing-library/react';
import React, { Component } from 'react';

//extra safety during production, won't see the h1 in dev mode
class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    }
  }

  //if any err, react runs this lifecycle hook
  componentDidCatch(error, info) {
    ;
    this.setState({ hasError: true })
  }

  render() {
    if (this.state.hasError) {
      return <h1>That is not good.Err</h1>
    }
    return this.props.children
  }
}

export default ErrorBoundry