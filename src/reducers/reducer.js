const defaultState = { checked: false };

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "TOGGLE":
      return { ...state, checked: action.payload };
    default:
      return state;
  }
};

export default reducer;
