import { axiosClient } from "../../app/axios/axiosClient";
import { LIMIT_HIGH } from "../../utils/commom";

export function requestGetAllProduct(data) {
  const limit = data?.limit || 10;
  const page = data?.page || 1;
  const name = data?.name;
  const category = data?.category;

  const queryName = name ? `&name=${name}` : "";
  return axiosClient.get(
    `/product?limit=${limit}&page=${page}${queryName}&category=${category}`
  );
}

export function requestGetAllVariant(data) {
  const type = data.type;
  return axiosClient.get(`/product/variant?type=${type}`);
}
