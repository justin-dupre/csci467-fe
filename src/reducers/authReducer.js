const initialState = {
  auth: false
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case "SUCCESS":
      return {
        auth: true
      };
    case "DENY":
      return {
        auth: false
      };
    default:
      return state;
  }
}

export default authReducer;
