
const SET_STACK = 'SET_STACK';
const setStack = (stack) => (
  {
    type: SET_STACK,
    stack,
  }
);

export {
  setStack,
  SET_STACK,
};
