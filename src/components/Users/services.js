import { Users } from "./data";

export const getUsers = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Users);
    }, 1000);
  });
};
