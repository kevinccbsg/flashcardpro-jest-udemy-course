import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import stacks from '../data/stacks.json';

class StackList extends Component {
  render() {
    return (
      <div>
        {stacks.map(obj => (
          <Link key={obj.id} to="/stack">
            <h4>{obj.title}</h4>
          </Link>
        ))}
      </div>
    );
  }
}

export default StackList;
