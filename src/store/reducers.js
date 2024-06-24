import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice";
import categorySlice from "./category/categorySlice";
import productSlice from "./product/productSlice";
import orderSlice from "./order/orderSlice";

export const reducer = combineReducers({
  user: userSlice,
  category: categorySlice,
  product: productSlice,
  order: orderSlice,
});
