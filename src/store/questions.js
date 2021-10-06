import { createSlice } from "@reduxjs/toolkit";

const questionsSlice = createSlice({
  name: "questions",
  initialState: {},
  reducers: {
    // Actions => action handler
    questionsReceived: (state, action) => {
      return action.payload;
    },
    getQuestionsFailed: (state, action) => {
      return action.payload;
    },
    updateVotes: (state, action) => {
      let { qid, authedUser, answer } = action.payload;
      state[qid][answer].votes.push(authedUser);
    },
    // TODO Fixed/Removed
    addQuestion: (state, action) => {
      return state;
    },
  },
});

export const { questionsReceived, getQuestionsFailed, updateVotes } =
  questionsSlice.actions;
export default questionsSlice.reducer;
