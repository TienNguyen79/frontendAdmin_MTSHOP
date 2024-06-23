import axios from "axios";
import { axiosClient } from "../../app/axios/axiosClient";

export function requestOverview() {
  return axiosClient.get(`/overview`);
}

export function requestLogin(data) {
  return axiosClient.post(`/admin/login`, data);
}

export function requestlogout() {
  return axiosClient.post(`/logout`);
}

export function requestGetCurrentUser() {
  return axiosClient.get(`/currentUser`);
}

export default function requestGetUser() {
  return axiosClient.get(`/users`);
}
