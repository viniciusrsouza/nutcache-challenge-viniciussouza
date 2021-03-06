import axios from "axios";

const _token = "c4011d509e764910b0a01a39fca3ae8d";

export const api = axios.create({
  baseURL: `https://crudcrud.com/api/${_token}/`,
});
