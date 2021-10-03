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

export const { activeUser } = authSlice.actions;
export default authSlice.reducer;
