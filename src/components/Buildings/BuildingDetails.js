import React, { useEffect, useState } from "react";
import styles from "./BuildingDetails.module.css";
import { getBuildingById } from "./services";

const BuildingDetails = ({ match }) => {
  const [buildingDetail, setBuildingDetail] = useState({});
  useEffect(() => {
    getBuildingById(match.params.id)
      .then((building) => setBuildingDetail(building))
      .catch((error) => alert(error));
  }, [match]);
  return (
    <div className={styles.details}>
      <h1>Detalhes do Edifício</h1>
      <div className={styles["details-grid"]}>
        <div className={styles["building-img"]}>
          <img src={buildingDetail} alt={buildingDetail.name} />
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
              {buildingDetail?.user?.name},{buildingDetail?.user?.profile}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BuildingDetails;
