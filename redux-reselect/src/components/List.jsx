import React from 'react';

const List = ({ list }) => {
  console.warn('RENDERING List');

  return (
    <div className="card">
      <ul>
        {list.map(listItem => (
          <li key={listItem}>{listItem}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
