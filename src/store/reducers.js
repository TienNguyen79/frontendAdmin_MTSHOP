import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice";

export const reducer = combineReducers({
  user: userSlice,
});
