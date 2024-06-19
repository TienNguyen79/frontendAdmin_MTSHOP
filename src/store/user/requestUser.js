import axios from "axios";
import { axiosClient } from "../../app/axios/axiosClient";

export function requestLogin(data) {
  return axiosClient.post(`/login`, data);
}
export function requestGetCurrentUser() {
  return axiosClient.get(`/currentUser`);
}

export default function requestGetUser() {
  return axiosClient.get(`/users`);
}
