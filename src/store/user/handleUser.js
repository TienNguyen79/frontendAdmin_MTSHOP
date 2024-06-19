import { createAsyncThunk } from "@reduxjs/toolkit";
import requestGetUser, {
  requestGetCurrentUser,
  requestLogin,
} from "./requestUser";
import { OK } from "../../utils/httpStatus";
import { toast } from "react-toastify";
import { saveToken } from "../../utils/localStorage";
import { statusRole, statusUser } from "../../utils/commom";

export const handleLoginAdmin = createAsyncThunk(
  "user/handleLoginAdmin",
  async (data, thunkAPI) => {
    try {
      const response = await requestLogin(data);

      if (response.status === OK) {
        if (
          response.data.results.roleID === statusRole.ADMIN &&
          response.data.results.status !== statusUser.BAN
        ) {
          toast.success("Đăng nhập thành công", { autoClose: 1000 });
          saveToken(response.data.token.accessToken);
          data.callback?.();
          return response.data.results;
        } else {
          toast.error("Tài khoản không tồn tại", { autoClose: 1000 });
          return;
        }
      }
    } catch (error) {
      toast.error(error.response.data.ms, { autoClose: 900 });
    }
  }
);

export const handleGetCurrentUser = createAsyncThunk(
  "user/handleGetCurrentUser",
  async (data, thunkAPI) => {
    try {
      const response = await requestGetCurrentUser();

      if (response.status === OK) {
        return response.data.results;
      }
    } catch (error) {
      // toast.error("Bạn Cần Đăng Nhập", { autoClose: 800 });
      console.log("🚀 ~ error:", error);
    }
  }
);

export const handleGetUser = createAsyncThunk(
  "user/handleGetUser",
  async (query, thunkAPI) => {
    const response = await requestGetUser();
    console.log("response", response);
    return response.data;
  }
);
