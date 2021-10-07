import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { loggedin: false },
  reducers: {
    // Actions => action handler
    activeUser: (state, action) => {
      return { ...state, ...action.payload };
    },
    answerQuestion: (state, action) => {
      let qid = action.payload[0];
      let answerOption = action.payload[1];
      let newObj = { [qid]: answerOption };
      return { ...state, answers: { ...state.answers, ...newObj } };
    },
    login: (state, action) => {
      return { ...state, loggedin: true };
    },
  },
});

//
export const getAnsweredQ = (state) => {
  if (!state.auth.loggedin) return;
  return Object.keys(state.auth.answers);
};

export const getUnAnsweredQ = (state) => {
  if (!state.auth.loggedin) return;
  return Object.keys(state.questions).filter(
    (o1) => !Object.keys(state.auth.answers).some((o2) => o2 === o1)
  );
};

export const { activeUser, answerQuestion, login } = authSlice.actions;
export default authSlice.reducer;
