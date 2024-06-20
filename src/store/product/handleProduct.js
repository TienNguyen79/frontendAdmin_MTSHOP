import { createAsyncThunk } from "@reduxjs/toolkit";
import { requestGetAllProduct, requestGetAllSize } from "./requestProduct";
import { toast } from "react-toastify";

export const handleGetAllProduct = createAsyncThunk(
  "product/handleGetAllProduct",
  async (data, thunkAPI) => {
    try {
      const response = await requestGetAllProduct(data);
      return response.data;
    } catch (error) {
      console.log("🚀 ~ error:", error);
    }
  }
);

// export const handleGetQuantityProduct = createAsyncThunk(
//   "product/handleGetQuantityProduct",
//   async (data, thunkAPI) => {
//     try {
//       const response = await requestGetQuantityProduct(data);
//       return response.data.results;
//     } catch (error) {
//       console.log("🚀 ~ error:", error);
//     }
//   }
// );

export const handleGetAllSize = createAsyncThunk(
  "product/handleGetAllSize",
  async (data, thunkAPI) => {
    try {
      const response = await requestGetAllSize();
      return response.data.results;
    } catch (error) {
      console.log("🚀 ~ error:", error);
    }
  }
);
