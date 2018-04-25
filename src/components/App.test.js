import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  const app = shallow(<App />);
  it('Renders `Flashcard Pro` title', () => {
    expect(app.find('h2').text()).toEqual('Flashcard Pro');
  });

  it('renders StackLists', () => {
    // we've gotta be carefully with connect statement for testing
    expect(app.find('Connect(StackList)').exists()).toBe(true);
  });

  it('reners a link to create new stacks', () => {
    expect(app.find('Link h4')).toHaveLength(1);
  });
});