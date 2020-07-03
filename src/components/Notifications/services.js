import { Notifications } from "./data";

export const getNotifications = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Notifications);
    }, 2000);
  });
};
