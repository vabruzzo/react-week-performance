import React from 'react';
import ViewportObserver from './ViewportObserver';

const LazyImage = ({ src }) => (
  <ViewportObserver>
    {(hasBeenInViewport, domRef) => {
      console.log(hasBeenInViewport);

      return (
        <div ref={domRef}>
          {hasBeenInViewport ? <img src={src} alt="abstract photograph" /> : null}
        </div>
      );
    }}
  </ViewportObserver>
);

export default LazyImage;
