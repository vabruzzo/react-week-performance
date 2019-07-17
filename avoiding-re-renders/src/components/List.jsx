import React, { Component } from 'react';

class List extends Component {
  render() {
    console.log('rendering List');

    return (
      <div>
        <p>List.jsx:</p>
        <ul className="list">
          {this.props.items.map((item, i) => {
            return <li key={i}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default List;
