import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {},
  reducers: {
    // Actions => action handler
    activeUser: (state, action) => {
      return action.payload;
    },
    answerQuestion: (state, action) => {
      let qid = action.payload[0];
      let answerOption = action.payload[1];
      let newObj = { [qid]: answerOption };
      return { ...state, answers: { ...state.answers, ...newObj } };
    },
  },
});

//
export const getAnsweredQ = (state) => {
  return state.auth ? Object.keys(state.auth?.answers) : null;
};

export const getUnAnsweredQ = (state) => {
  return Object.keys(state.questions).filter(
    (o1) => !Object.keys(state.auth.answers).some((o2) => o2 === o1)
  );
};

export const { activeUser, answerQuestion, logout } = authSlice.actions;
export default authSlice.reducer;
