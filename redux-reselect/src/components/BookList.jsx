import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import List from './List';
import { getTitles } from '../state/bookList';

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
    list: getTitles(state),
  };
}

export default connect(mapStateToProps)(BookList);
