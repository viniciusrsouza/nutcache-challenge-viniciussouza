import axios from "axios";

const _token = "91de6c12590c42a6ac138a2f7e0d227f";

export const endpoints = {
  nutemployee: "nutemployee/",
};

export const api = axios.create({
  baseURL: `https://crudcrud.com/api/${_token}/`,
});
