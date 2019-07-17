import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import List from './List';

class BookList extends Component {
  render() {
    console.warn('RENDERING BookList');

    return (
      <Fragment>
        <label className="label">Book List</label>
        <List list={this.props.list} />
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    list: state.bookList.map(item => item.bookTitle),
  };
}

export default connect(mapStateToProps)(BookList);
