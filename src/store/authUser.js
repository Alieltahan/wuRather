import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: [],
  reducers: {
    // Actions => action handler
    activeUser: (state, action) => {
      return action.payload;
    },
  },
});

export const getAnsweredQ = (state) =>
  Object.keys(state.users[state.auth].answers);

export const getUnAnsweredQ = (state) => {
  return Object.keys(state.questions).filter(
    (o1) =>
      !Object.keys(state.users[state.auth].answers).some((o2) => o2 === o1)
  );
};

export const { activeUser } = authSlice.actions;
export default authSlice.reducer;
