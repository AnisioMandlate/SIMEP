import React, { useEffect, useState } from "react";
import styles from "../Profile/Profile.module.css";
import { getUserById } from "./services";

const UserDetails = ({ match }) => {
  const [userDetail, setUserDetail] = useState({});

  useEffect(() => {
    getUserById(match.params.id)
      .then((user) => setUserDetail(user))
      .catch((error) => console.error(error));
  }, [match]);
  return (
    <div className={styles.profile}>
      <div className={styles["profile-card"]}>
        <h3>Detalhes do Usuário</h3>
        <hr />
        <div className={styles["card-content"]}>
          <div className={styles["profile-pic"]}>
            <img src={userDetail?.avatar?.url} alt="Foto de Perfil" />
            <h4>{userDetail.profile}</h4>
          </div>
          <hr />
          <div>
            <p>Nome do Utilizador</p>
            <p>Email</p>
            <p>Contacto</p>
          </div>
          <div className={styles["user-data"]}>
            <p>
              {userDetail.name} {userDetail.surname}{" "}
            </p>
            <p>{userDetail.email} </p>
            <p>(+258) {userDetail.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
