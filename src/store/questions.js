import { createSlice } from "@reduxjs/toolkit";

const questionsSlice = createSlice({
  name: "questions",
  initialState: {},
  reducers: {
    // Actions => action handler
    getQuestions: (state, action) => {
      return action.payload;
    },
  },
});

export const { getQuestions } = questionsSlice.actions;
export default questionsSlice.reducer;
