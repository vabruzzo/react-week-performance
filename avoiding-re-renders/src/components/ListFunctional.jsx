import React from 'react';

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

// const areEqual = (prevProps, nextProps) => prevProps.items === nextProps.items;

export default ListFunctional;
