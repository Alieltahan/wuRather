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
  },
});

export const { usersReceived, getUsersFailed } = usersSlice.actions;
export default usersSlice.reducer;
