import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice";
import categorySlice from "./category/categorySlice";

export const reducer = combineReducers({
  user: userSlice,
  category: categorySlice,
});
