import * as actions from './index';
import { stack, stacks } from '../data/fixtures';


describe('actions', () => {
  it('creates an action to set the main stack', () => {
    const expected = { type: actions.SET_STACK, stack };
    expect(actions.setStack(stack)).toEqual(expected);
  });

  it('creates an action to add stack', () => {
    const expected = { type: actions.ADD_STACK, stack };
    expect(actions.addStack(stack)).toEqual(expected);
  });

  it('creates an action to load stacks', () => {
    const expected = { type: actions.LOAD_STACKS, stacks };
    expect(actions.loadStacks(stacks)).toEqual(expected);
  });
});

