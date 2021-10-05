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
  },
});

export const { questionsReceived, getQuestionsFailed } = questionsSlice.actions;
export default questionsSlice.reducer;
