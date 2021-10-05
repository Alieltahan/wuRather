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
      let key = action.payload[0];
      let value = action.payload[1];
      let newObj = { [key]: value };
      return { ...state, answers: { ...state.answers, ...newObj } };
    },
  },
});

export const getAnsweredQ = (state) =>
  Object.keys(state.users[state.auth.id].answers);

export const getUnAnsweredQ = (state) => {
  return Object.keys(state.questions).filter(
    (o1) =>
      !Object.keys(state.users[state.auth.id].answers).some((o2) => o2 === o1)
  );
};

export const { activeUser, answerQuestion } = authSlice.actions;
export default authSlice.reducer;
