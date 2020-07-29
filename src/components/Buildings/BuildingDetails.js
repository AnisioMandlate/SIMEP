import React, { useEffect, useState } from "react";
import styles from "./BuildingDetails.module.css";
import { getBuildingById } from "./services";
import api from "../services/api";

const BuildingDetails = ({ match }) => {
  const [buildingDetail, setBuildingDetail] = useState({});
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    getBuildingById(match.params.id)
      .then((building) => setBuildingDetail(building))
      .catch((error) => alert(error));
  }, [match]);

  useEffect(() => {
    const userId = JSON.parse(sessionStorage.getItem("simepUser")).id;
    api.get(`/users/${userId}`).then(({ data }) => setUserDetails(data));
  }, []);

  return (
    <div className={styles.details}>
      <h1>Detalhes do Edifício</h1>
      <div className={styles["details-grid"]}>
        <div className={styles["building-img"]}>
          <img src={buildingDetail?.image?.url} alt={buildingDetail.name} />
        </div>
        <div className={styles["building-info"]}>
          <p className={styles["info-title"]}>
            Nome do edifício: <span>{buildingDetail.name}</span>
          </p>

          <p className={styles["info-title"]}>
            Tipo de edifício: <span>{buildingDetail.type}</span>
          </p>

          <p className={styles["info-title"]}>
            Localização do edifício: <span>{buildingDetail.location}</span>
          </p>

          <p className={styles["info-title"]}>
            Data e hora de registo: <span> {buildingDetail.created_at}</span>
          </p>

          <p className={styles["info-title"]}>
            Registado por:{" "}
            <span>
              {userDetails.name} {userDetails.surname},{userDetails.profile}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BuildingDetails;
