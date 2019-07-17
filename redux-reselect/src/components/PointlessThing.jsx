import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { toggleBoolean } from '../state/pointlessBoolean.js';

class PointlessThing extends Component {
  handleToggle = () => {
    this.props.toggleBoolean(this.props.pointlessBoolean);
  };

  render() {
    console.warn('RENDERING PointlessThing');

    return (
      <div>
        <button className="button" onClick={this.handleToggle}>
          Pointless boolean: {this.props.pointlessBoolean.toString()}
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    pointlessBoolean: state.pointlessBoolean,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleBoolean }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PointlessThing);
