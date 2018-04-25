import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

class StackForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      cards: [],
    };
  }

  addCard() {
    const { cards } = this.state;
    const newCards = cards.concat({
      id: cards.length,
      prompt: '',
      answer: '',
    });
    this.setState({ cards: newCards });
  }

  updateCardPrompt(event, index, part) {
    const { cards } = this.state;
    cards[index][part] = event.target.value;
    this.setState({ cards });
  }

  addStack() {

  }

  render () {
    const { cards } = this.state;
    return (
      <div>
        <Link className="link-home" to="/">Home</Link>
        <h4>Create a new Stack</h4>
        <br />
        <Form inline>
          <FormGroup>
            <ControlLabel>Title:</ControlLabel>
            <FormControl onChange={event => this.setState({
              title: event.target.value,
            })}/>
          </FormGroup>
        {cards.map((card, index) => (
          <div key={card.id}>
            <br />
            <FormGroup>
              <ControlLabel>Prompt:</ControlLabel>
              {' '}
              <FormControl onChange={event => this.updateCardPrompt(event, index, 'prompt')} />
              {' '}
              <ControlLabel>Answer:</ControlLabel>
              {' '}
              <FormControl onChange={event => this.updateCardPrompt(event, index, 'answer')} />
              {' '}
            </FormGroup>
          </div>
        ))}
        </Form>
        <br />
        <Button onClick={() => this.addCard()}>Add a card</Button>
        <hr />
        <Button onClick={() => this.addStack()}>Save and Add Stack</Button>
      </div>
    );
  }
}

export default StackForm;
