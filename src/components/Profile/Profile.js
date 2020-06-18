import React from "react";
import styles from "./Profile.module.css";
import profilePic from "../../assets/profile-pic.jpg";

const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles["profile-card"]}>
        <h3>Perfil</h3>
        <div className={styles["card-content"]}>
          <div>
            <img src={profilePic} alt="Foto de Perfil" />
            <p>Director de Operações</p>
            <h4>Administrador de Sistema</h4>
          </div>
          <div>
            <p>Nome do Utilizador</p>
            <p>Direcção</p>
            <p>Departamento</p>
            <p>Email</p>
            <p>Contacto</p>
            <p>Senha</p>
          </div>
          <div>
            <p>Nome do Utilizador</p>
            <p>Direcção</p>
            <p>Departamento</p>
            <p>Email</p>
            <p>Contacto</p>
            <p>Senha</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
