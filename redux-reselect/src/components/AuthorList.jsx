import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import List from './List';
import { getAuthors } from '../state/bookList';

class AuthorList extends Component {
  render() {
    console.warn('RENDERING AuthorList');

    return (
      <Fragment>
        <label className="label">Author List</label>
        <List list={this.props.list} />
      </Fragment>
    );
  }
}

/**
 * Rather than mapping the books to a new array of their authors on every change in state,
 * and thus causing a re-render, we use a memoized selector here that will return the
 * same array as the last time the data was computed. That is, there will be no re-render
 * when there is no new array.
 */
function mapStateToProps(state) {
  return {
    list: getAuthors(state),
  };
}

export default connect(mapStateToProps)(AuthorList);
