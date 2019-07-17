import React, { Component } from 'react';

class ListSCU extends Component {
  // shouldComponentUpdate(nextProps, nextState) {
    
  // }

  render() {
    console.log('rendering ListSCU');

    return (
      <div>
        <p>ListSCU.jsx:</p>
        <ul className="list">
          {this.props.items.map((item, i) => {
            return <li key={i}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default ListSCU;
