import reducer, { initalState } from './index';
import * as actions from './../actions/index';
import { stack, stacks } from '../data/fixtures';

describe('reducer', () => {
  it('returns initial state', () => {
    expect(reducer(initalState, {})).toEqual(initalState);
  });

  it('sets main stack', () => {
    expect(reducer(initalState, actions.setStack(stack)))
    .toEqual({
      stack,
      stacks: [],
    });
  });

  it('loads stacks', () => {
    expect(reducer(initalState, actions.loadStacks(stacks)))
    .toEqual({
      stack: {},
      stacks,
    });
  });

  it('create stack', () => {
    expect(reducer(initalState, actions.addStack(stack)))
    .toEqual({
      stack: {},
      stacks: [stack],
    });
  });
});
