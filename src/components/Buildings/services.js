import { Buildings } from "./data";

export const getBuildings = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Buildings);
    }, 2000);
  });
};

export const getBuildingById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const building = Buildings.filter((build) => id === build.id)[0];
      resolve(building);
    }, 2000);
  });
};

export const getBuildingByName = (name) => {
  return new Promise((resolve, reject) => {
    const building = Buildings.filter((build) =>
      build.name.toLowerCase().includes(name.toLowerCase())
    );
    resolve(building);
  });
};

export const filterBuildings = (filters) => {};
