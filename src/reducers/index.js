import { SET_STACK } from './../actions';

const initalState = {
  stack: {},
};

const reducer = (state = { ...initalState }, action) => {
  switch (action.type) {
    case SET_STACK: {
      return { ...state, stack: { ...action.stack } };
    }
    default:
      return { ...state };
  }
};

export default reducer;
