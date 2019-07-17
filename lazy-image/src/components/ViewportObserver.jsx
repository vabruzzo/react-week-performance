import React, { Component } from 'react';

const supportsIntersectionObserver =
  'IntersectionObserver' in global &&
  'IntersectionObserverEntry' in global &&
  'intersectionRatio' in IntersectionObserverEntry.prototype;

if (typeof window !== 'undefined' && !supportsIntersectionObserver) {
  require('intersection-observer');
}

class ViewportObserver extends Component {
  state = { hasBeenInViewport: false };
  domRef = React.createRef();

  componentDidMount() {
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.setState({ hasBeenInViewport: true });
        this.observer.disconnect();
      }
    });

    this.domRef && this.observer.observe(this.domRef.current);
  }

  componentWillUnmount() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  render() {
    const { children } = this.props;
    const { hasBeenInViewport } = this.state;

    return children(hasBeenInViewport, this.domRef);
  }
}

export default ViewportObserver;
