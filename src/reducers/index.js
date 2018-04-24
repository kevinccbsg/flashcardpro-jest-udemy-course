import { SET_STACK, LOAD_STACKS } from './../actions';

const initalState = {
  stacks: [],
  stack: {},
};

const reducer = (state = { ...initalState }, action) => {
  switch (action.type) {
    case SET_STACK: {
      return { ...state, stack: { ...action.stack } };
    }
    case LOAD_STACKS: {
      return { ...state, stacks: [...action.stacks] }; 
    }
    default:
      return { ...state };
  }
};

export default reducer;
