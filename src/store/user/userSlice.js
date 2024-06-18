import { createSlice, createAction } from "@reduxjs/toolkit";

import { toast } from "react-toastify";
import { handleGetUser } from "./handleUser";

//Reducer Là các hàm xử lý các action và cập nhật trạng thái của ứng dụng.
export const setLoading = createAction("setLoading");

// fullfiled | pending | rejected
const initialState = {
  dataUser: [],
  loading: false,
  errorMessage: "",
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // setLoading: (state, action) => ({
    //   ...state,
    //   loading: action.payload,
    // }),
  },
  extraReducers: (builder) => {
    builder
      //case News
      .addCase(handleGetUser.fulfilled, (state, action) => {
        state.dataUser = action.payload;
        state.loading = false;
      })
      .addCase(handleGetUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(handleGetUser.rejected, (state, action) => {
        state.loading = false;
      })

      .addCase(setLoading, (state, action) => {
        state.loading = action.payload;
      });
  },
});
// export const { setLoading } = userSlice.actions;
export default userSlice.reducer;
