import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Card from './Card';

class Stack extends Component {
  render() {
    const { stack } = this.props;
    return (
      <div>
        <Link className="link-home" to="/">Home</Link>
        <h3>{stack.title}</h3>
        <br />
        {stack.cards.map(card => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    stack: state.stack,
  }
);

export default connect(mapStateToProps)(Stack);
