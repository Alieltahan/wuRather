import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {},
  reducers: {
    // Actions => action handler
    usersReceived: (state, action) => {
      return action.payload;
    },
    getUsersFailed: (state, action) => {
      return action.payload;
    },
    answerQuestionToUser: (state, action) => {
      const { authedUser, qid, answer } = action.payload;
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: { ...state[authedUser].answers, [qid]: answer },
        },
      };
    },
  },
});

export const { usersReceived, getUsersFailed, answerQuestionToUser } =
  usersSlice.actions;
export default usersSlice.reducer;
