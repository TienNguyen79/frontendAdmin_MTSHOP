import { createAsyncThunk } from "@reduxjs/toolkit";
import requestGetUser from "./requestUser";

export const handleGetUser = createAsyncThunk(
  "user/handleGetUser",
  async (query, thunkAPI) => {
    const response = await requestGetUser();
    console.log("response", response);
    return response.data;
  }
);
