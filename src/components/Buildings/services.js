import { Buildings } from "./data";

import api from "../services/api";

export const getBuildingById = (id) => {
  return api.get(`/buildings/${id}`).then((response) => response.data);
};

export const getBuildingByName = (name) => {
  return new Promise((resolve, reject) => {
    const building = Buildings.filter((building) =>
      building.name.toLowerCase().includes(name.toLowerCase())
    );
    resolve(building);
  });
};
