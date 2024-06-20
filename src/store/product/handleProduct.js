import { createAsyncThunk } from "@reduxjs/toolkit";
import { requestGetAllProduct, requestGetAllVariant } from "./requestProduct";
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

export const handleGetAllSize = createAsyncThunk(
  "product/handleGetAllSize",
  async (data, thunkAPI) => {
    try {
      const response = await requestGetAllVariant(data);
      return response.data.results;
    } catch (error) {
      console.log("🚀 ~ error:", error);
    }
  }
);

export const handleGetAllColor = createAsyncThunk(
  "product/handleGetAllColor",
  async (data, thunkAPI) => {
    try {
      const response = await requestGetAllVariant(data);
      return response.data.results;
    } catch (error) {
      console.log("🚀 ~ error:", error);
    }
  }
);
