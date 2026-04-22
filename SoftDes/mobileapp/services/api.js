import axios from "axios";

const API = axios.create({
  baseURL: "http://192.168.1.5:5000/api"
});

export const getInventory = () => API.get("/inventory");
export const addInventory = (data) => API.post("/inventory", data);
export const optimizeRoute = (data) => API.post("/delivery/optimize", data);