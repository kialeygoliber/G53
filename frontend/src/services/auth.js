import axios from "axios";
import { API_URL } from "../config";

export async function login(username, password) {
  const res = await axios.post(`${API_URL}/users/login`, { username, password });
  const token = res.data.access_token;
  localStorage.setItem("token", token);
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export function logout() {
  localStorage.removeItem("token");
  delete axios.defaults.headers.common["Authorization"];
}

export function loadToken() {
  const token = localStorage.getItem("token");
  if (token) axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}
