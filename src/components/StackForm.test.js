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
});
