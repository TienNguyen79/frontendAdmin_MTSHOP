import { axiosClient } from "../../app/axios/axiosClient";
import { LIMIT_HIGH } from "../../utils/commom";

export function requestGetAllProduct(data) {
  const limit = data?.limit || 10;
  const page = data?.page || 1;
  const name = data?.name;
  const category = data?.category;

  return axiosClient.get(
    `/product?limit=${limit}&page=${page}&name=${name}&category=${category}`
  );
}

export function requestGetAllSize() {
  return axiosClient.get(`/product/sizes`);
}
