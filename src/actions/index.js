
const ADD_STACK = 'ADD_STACK';
const addStack = (stack) => (
  {
    type: ADD_STACK,
    stack,
  }
);

const LOAD_STACKS = 'LOAD_STACKS';
const loadStacks = (stacks) => (
  {
    type: LOAD_STACKS,
    stacks,
  }
);

const SET_STACK = 'SET_STACK';
const setStack = (stack) => (
  {
    type: SET_STACK,
    stack,
  }
);

export {
  setStack,
  loadStacks,
  addStack,
  SET_STACK,
  LOAD_STACKS,
  ADD_STACK,
};
