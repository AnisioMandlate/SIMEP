import { Buildings } from "./data";

import api from "../services/api";

export const getBuildingById = (id) => {
  return api.get(`/buildings/${id}`).then((response) => response.data);
};

export const getBuildingByName = (name) => {
  // api.get(`buildings`).then((resolve, reject) => {
  //   const building = buildings.filter((build) =>
  //     build.name.toLowerCase().includes(name.toLowerCase())
  //   );
  //   resolve(building);
  // });
  return new Promise((resolve, reject) => {
    const building = Buildings.filter((build) =>
      build.name.toLowerCase().includes(name.toLowerCase())
    );
    resolve(building);
  });
};
