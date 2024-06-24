import { createAsyncThunk } from "@reduxjs/toolkit";

import { toast } from "react-toastify";
import requestGetAllOrder, {
  requestCancelOrder,
  requestDeleteOrder,
  requestUpdateStatusOrder,
} from "./requestOrder";

export const handleGetAllOrder = createAsyncThunk(
  "category/handleGetAllOrder",
  async (data, thunkAPI) => {
    try {
      const response = await requestGetAllOrder(data);
      return response.data;
    } catch (error) {
      console.log("🚀 ~ error:", error);
    }
  }
);

export const handleUpdateStatusOrder = createAsyncThunk(
  "category/handleUpdateStatusOrder",
  async (data, thunkAPI) => {
    try {
      const response = await requestUpdateStatusOrder(data);
      if (response.status === 200) {
        data?.callBack?.();
      }
    } catch (error) {
      console.log("🚀 ~ error:", error);
    }
  }
);

export const handleCancelOrder = createAsyncThunk(
  "category/handleCancelOrder",
  async (data, thunkAPI) => {
    try {
      const response = await requestCancelOrder(data);
      if (response.status === 200) {
        data?.callBack?.();
      }
    } catch (error) {
      console.log("🚀 ~ error:", error);
    }
  }
);

export const handleDeleteOrder = createAsyncThunk(
  "category/handleDeleteOrder",
  async (data, thunkAPI) => {
    try {
      const response = await requestDeleteOrder(data);
      if (response.status === 200) {
        data?.callBack?.();
      }
    } catch (error) {
      console.log("🚀 ~ error:", error);
    }
  }
);
