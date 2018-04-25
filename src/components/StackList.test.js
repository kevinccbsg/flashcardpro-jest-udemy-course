import React from 'react';
import { shallow } from 'enzyme';
import { StackList } from './StackList';
import { stacks } from '../data/fixtures';

const props = {
  stacks,
};

describe('StackList', () => {
  const stacklist = shallow(<StackList {...props} />);

  it('has two links', () => {
    expect(stacklist.find('Link')).toHaveLength(props.stacks.length);
  });

  it('renders correct title', () => {
    expect(stacklist.find('Link h4').at(0).text()).toEqual(props.stacks[0].title);
  });
});