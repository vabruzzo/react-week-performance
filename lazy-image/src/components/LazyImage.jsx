import React from 'react';
import ViewportObserver from './ViewportObserver';

const LazyImage = ({ src }) => (
  <ViewportObserver>
    {(hasBeenInViewport, domRef) => (
      <img ref={domRef} src={hasBeenInViewport ? src : null} alt="abstract photograph" />
    )}
  </ViewportObserver>
);

export default LazyImage;
