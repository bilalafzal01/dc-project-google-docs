import actions from "./actions";

const { SET_NAMEMODAL } = actions;

const initialState = {
  nameModal: false,
  documentId: null,
};

const modalReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case SET_NAMEMODAL:
      return {
        ...state,
        nameModal: !state.nameModal,
        documentId: action.payload,
      };
    default:
      return state;
  }
};

export default modalReducer;
