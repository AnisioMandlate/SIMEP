import React, { useEffect, useState } from "react";
import styles from "../Profile/Profile.module.css";
import { getUserById } from "./services";

const UserDetails = ({ match }) => {
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    getUserById(match.params.id)
      .then((user) => setUserDetails(user))
      .catch((error) => console.error(error));
  }, [match]);
  return (
    <div className={styles.profile}>
      <div className={styles["profile-card"]}>
        <h3>Detalhes do Usuário</h3>
        <hr />
        <div className={styles["card-content"]}>
          <div className={styles["profile-pic"]}>
            <img src={userDetails.avatar} alt="Foto de Perfil" />
            <p>{userDetails.profile}</p>
          </div>
          <hr />
          <div>
            <p>Nome do Utilizador</p>
            <p>Email</p>
            <p>Contacto</p>
          </div>
          <div className={styles["user-data"]}>
            <p>
              {userDetails.name} {userDetails.surname}{" "}
            </p>
            <p>{userDetails.email} </p>
            <p>(+258) {userDetails.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
