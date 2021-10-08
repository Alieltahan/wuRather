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

export const { activeUser, answerQuestion, login } = authSlice.actions;
export default authSlice.reducer;
