import React from 'react';
import { shallow } from 'enzyme';
import { StackForm } from './StackForm';

describe('StackForm', function() {
  const stackform = shallow(<StackForm />);
  it('render the form title', () => {
    expect(stackform.find('h4').first().text()).toEqual('Create a new Stack');
  });

  it('render link home', () => {
    expect(stackform.find('Link').children().text()).toEqual('Home');
  });

  it('renders a Form component', () => {
    expect(stackform.find('Form').exists()).toBe(true);
  });

  it('render a button to add new car', () => {
    expect(stackform.find('Button').at(0).children().text()).toEqual('Add a card');
  });

  describe('an updating the title', () => {
    const updateTitle = 'change title';
    beforeEach(() => {
      stackform.find('FormControl').simulate('change', {
        target: {
          value: updateTitle,
        }
      });
    });

    it('state affected', () => {
      expect(stackform.state().title).toEqual(updateTitle);
    });
  });

  describe('when adding a new card', () => {
    beforeEach(() => {
      stackform.find('Button').at(0).simulate('click');
    });

    it('add new cards to state', () => {
      expect(stackform.state().cards.length).toEqual(1);
    });

    it('it renders the prompt section', () => {
      expect(stackform.find('ControlLabel').at(1).props().children).toEqual('Prompt:');
    });
  });

});
