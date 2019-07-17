import React from 'react';

/**
 * React.memo performs a similar shallow comparison as PureComponent, but just with props.
 * It takes a second argument if we want a custom comparison function.
 */
const ListFunctional = props => (
  console.log('rendering ListFunctional'),
  (
    <div>
      <p>ListFunctional.jsx:</p>
      <ul className="list">
        {props.items.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
    </div>
  )
);

const areEqual = (prevProps, nextProps) => prevProps.items === nextProps.items;

export default React.memo(ListFunctional, areEqual);
