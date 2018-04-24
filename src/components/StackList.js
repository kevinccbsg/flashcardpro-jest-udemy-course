import React, { Component } from 'react';
import stacks from '../data/stacks.json';

class StackList extends Component {
  render() {
    return (
      <div>
        {stacks.map(obj => (
          <h4 key={obj.id}>{obj.title}</h4>
        ))}
      </div>
    );
  }
}

export default StackList;
