const defaultState = { count: 1 };
const counter = (state = defaultState, action) => {
  switch (action.type) {
    case 'INCREMENT': {
      return { count: state.count + 1 };
    }
    case 'DECREMENT': {
      return { count: state.count - 1 };
    }
    default: {
      return state;
    }
  }
};

export default counter;
