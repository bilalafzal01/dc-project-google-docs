import actions from "./actions";

const { SET_USER } = actions;

const initialState = {
  name: "",
  id: "",
};

const userReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
