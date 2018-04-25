import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setStack, loadStacks } from '../actions';
import stacks from '../data/stacks.json';

export class StackList extends Component {
  componentDidMount() {
    if (this.props.stacks.length === 0) {
      this.props.loadStacks(stacks);
    }
  }
  render() {
    const { stacks } = this.props;
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

const mapStateToProps = (state) => (
  {
    stacks: state.stacks,
  }
);
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setStack,
    loadStacks,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(StackList);
