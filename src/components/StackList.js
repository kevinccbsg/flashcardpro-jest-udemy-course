import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setStack } from '../actions';
import stacks from '../data/stacks.json';

class StackList extends Component {
  render() {
    return (
      <div>
        {stacks.map(obj => (
          <Link
            key={obj.id}
            to="/stack"
            onClick={() => this.props.setStack(obj)}
          >
            <h4>{obj.title}</h4>
          </Link>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setStack,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(StackList);
