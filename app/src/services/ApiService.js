import axios from "axios";

const _token = "27b4a6af37a140d883c7649d86153c2b";

export const api = axios.create({
  baseURL: `https://crudcrud.com/api/${_token}/`,
});
