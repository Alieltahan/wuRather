import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { _getUsers } from "../_DATA";

const fetchUsers = createAsyncThunk("", async () => {
  const response = await _getUsers();
  return response.data;
});

const usersSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    // Actions => action handler
    getAllUsers: () => fetchUsers.fulfilled,
  },
});

// export const {} = usersSlice.actions;
export default usersSlice.reducer;
