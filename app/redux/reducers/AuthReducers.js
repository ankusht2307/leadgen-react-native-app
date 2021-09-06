const signInReducer = (state = { isAuthenticated: false }, action) => {
  switch (action.type) {
    case 'signIn':
      return { isAuthenticated: true };
    default:
      return state;
  }
};

export default signInReducer;
