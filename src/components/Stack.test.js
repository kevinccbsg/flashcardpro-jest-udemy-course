import React from 'react';
import { shallow } from 'enzyme';
import { Stack } from './Stack';

const props = {
  stack: {
    id: 0,
    title: 'test card',
    cards: [{ id: 0, prompt: 'test prompt', answer: 'test answer' }],
  },
};

describe('Stack', () => {
  const stack = shallow(<Stack {...props} />);
  it('renders title', () => {
    expect(stack.find('h3').text()).toEqual(props.stack.title);
  });

  it('renders link home', () => {
    expect(stack.find('Link').children().text()).toEqual('Home');
  });

  it('renders the correct number of cards', () => {
    expect(stack.find('Card').length).toEqual(props.stack.cards.length);
  });
});