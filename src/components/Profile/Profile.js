import React from "react";
import styles from "./Profile.module.css";
import profilePic from "../../assets/profile-pic.jpg";

const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles["profile-card"]}>
        <h3>Perfil</h3>
        <hr />
        <div className={styles["card-content"]}>
          <div className={styles["profile-pic"]}>
            <img src={profilePic} alt="Foto de Perfil" />
            <p>Director de Operações</p>
            <h4>Administrador de Sistema</h4>
          </div>
          <hr />
          <div>
            <p>Nome do Utilizador</p>
            <p>Direcção</p>
            <p>Departamento</p>
            <p>Email</p>
            <p>Contacto</p>
            <p>Senha</p>
          </div>
          <div className={styles["user-data"]}>
            <p>Pedro das Neves Pinto</p>
            <p>Recursos Materiais</p>
            <p>Projectos e Tecnologias</p>
            <p>pedro.pinto@mophr.gov.mz</p>
            <p>(+258) 846239715</p>
            <p className={styles.senha}>Alterar Senha</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
