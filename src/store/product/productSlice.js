import { createSlice, createAction } from "@reduxjs/toolkit";
import {
  handleFilterProduct,
  handleGetAllProduct,
  handleGetAllSize,
} from "./handleProduct";

//Reducer Là các hàm xử lý các action và cập nhật trạng thái của ứng dụng.
export const setLoading = createAction("setLoading");

// fullfiled | pending | rejected
const initialState = {
  dataAllProduct: [],

  dataQuantityProduct: {},
  dataAllSize: [],
  loading: false,
  loadingSearchProduct: false,
};
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // setLoading: (state, action) => ({
    //   ...state,
    //   loading: action.payload,
    // }),
  },
  extraReducers: (builder) => {
    builder
      //get all product
      .addCase(handleGetAllProduct.fulfilled, (state, action) => {
        state.dataAllProduct = action.payload;
        state.loadingSearchProduct = false;
      })
      .addCase(handleGetAllProduct.pending, (state, action) => {
        state.loadingSearchProduct = true;
      })
      .addCase(handleGetAllProduct.rejected, (state, action) => {
        state.dataAllProduct = [];
        state.loadingSearchProduct = false;
      });

    // //data quantity Product
    // .addCase(handleGetQuantityProduct.fulfilled, (state, action) => {
    //   state.dataQuantityProduct = action.payload;
    // })
    // .addCase(handleGetQuantityProduct.rejected, (state, action) => {
    //   state.dataQuantityProduct = {};
    // })

    // //data filter  Product
    // .addCase(handleFilterProduct.fulfilled, (state, action) => {
    //   state.dataAllProduct = action.payload;
    // })
    // .addCase(handleFilterProduct.rejected, (state, action) => {
    //   state.dataAllProduct = [];
    // })

    // //data get all size Product
    // .addCase(handleGetAllSize.fulfilled, (state, action) => {
    //   state.dataAllSize = action.payload;
    // })
    // .addCase(handleGetAllSize.rejected, (state, action) => {
    //   state.dataAllSize = [];
    // });
  },
});
// export const { setLoading } = productSlice.actions;
export default productSlice.reducer;
