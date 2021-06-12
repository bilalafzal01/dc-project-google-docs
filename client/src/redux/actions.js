const actions = {
  SET_NAMEMODAL: "SET_NAMEMODAL",
  SET_USER: "SET_USER",

  triggerNameModal: (documentId) => {
    return {
      type: actions.SET_NAMEMODAL,
      payload: documentId ? documentId : null,
    };
  },

  setUser: (user) => {
    return {
      type: actions.SET_USER,
      payload: user,
    };
  },
};

export default actions;
