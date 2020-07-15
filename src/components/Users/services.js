import api from "../services/api";

export const getUserById = (id) => {
  return api.get(`/users/${id}`).then((response) => response.data);
};
