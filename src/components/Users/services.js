import api from "../services/api";

export const getUserById = (id) => {
  return api.get(`/users/${id}`).then((response) => response.data);
};

export const uploadPicture = (file) => {
  return api.post("files", file);
};

export const addUser = (data) => {
  return api.post("users", data);
};
