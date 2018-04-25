import { SET_STACK, LOAD_STACKS, ADD_STACK } from './../actions';

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
    case ADD_STACK: {
      return { ...state, stacks: [...state.stacks, { ...action.stack, id: state.stacks.length } ] };
    }
    default:
      return { ...state };
  }
};

export default reducer;
