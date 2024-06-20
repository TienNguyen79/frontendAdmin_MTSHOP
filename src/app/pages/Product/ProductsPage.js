import React, { useEffect } from "react";
import LayoutDetail from "../../components/Layout/LayoutDetail";
import { Epath } from "../../routes/routerConfig";
import { useDispatch, useSelector } from "react-redux";
import { handleGetAllProduct } from "../../../store/product/handleProduct";

const ProductsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleGetAllProduct());
  }, []);

  const { dataAllProduct } = useSelector((state) => state.product);
  return (
    <LayoutDetail titleBtn="Thêm Sản Phẩm">
      <h1>hehe</h1>
    </LayoutDetail>
  );
};

export default ProductsPage;
