import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';
import { card as cardFixture } from '../data/fixtures';

const props = {
  card: cardFixture,
};

describe('Card', () => {
  const card = shallow(<Card {...props} />);
  
  it('render a div with car class', () => {
    expect(card.find('div.card').exists()).toBe(true);
  });

  it('render our prompt text', () => {
    expect(card.find('.card-prompt h4').text()).toEqual(props.card.prompt);
  });

  it('should be hidde the answer', () => {
    expect(card.find('.card-answer h4').props().className).toEqual('text-hidden');
  });

  describe('click into answer', () => {
    beforeEach(() => {
      card.find('div.card').simulate('click');
    });

    it('state change', () => {
      expect(card.state().reveal).toBe(true);
    });

    it('should be show the answer', () => {
      expect(card.find('.card-answer h4').props().className).toEqual('text-revealed');
    });

  })
});