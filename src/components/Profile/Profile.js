import React, { useState, useEffect } from "react";
import styles from "./Profile.module.css";
import api from "../services/api";
import { Link } from "react-router-dom";

const Profile = () => {
  const [profileDetails, setProfileDetails] = useState({});

  useEffect(() => {
    const userId = JSON.parse(sessionStorage.getItem("simepUser")).id;
    api.get(`/users/${userId}`).then(({ data }) => setProfileDetails(data));
  }, []);

  return (
    <div className={styles.profile}>
      <div className={styles["profile-card"]}>
        <h3>Perfil</h3>
        <hr />
        <div className={styles["card-content"]}>
          <div className={styles["profile-pic"]}>
            <img src={profileDetails?.avatar?.url} alt="Foto de Perfil" />
            <h4>{profileDetails.profile} </h4>
          </div>
          <hr />
          <div>
            <p>Nome do Utilizador</p>
            <p>BI nr.</p>
            <p>NUIT</p>
            <p>Email</p>
            <p>Contacto</p>
            <p>Senha</p>
          </div>
          <div className={styles["user-data"]}>
            <p>
              {profileDetails.name} {profileDetails.surname}
            </p>
            <p>{profileDetails.bi} </p>
            <p>{profileDetails.nuit}</p>
            <p>{profileDetails.email} </p>
            <p>(+258) {profileDetails.phone}</p>
            <Link to="/recover-password">
              <p className={styles.senha}>Alterar Senha</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
