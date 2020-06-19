import React from "react";
import styles from "./User.module.css";
import userPic from "../../assets/profile-pic.jpg";
import deleteIcon from "../../assets/delete.svg";
import editIcon from "../../assets/edit.svg";

const User = () => {
  return (
    <div className={styles.user}>
      <div className={styles["user-content"]}>
        <h3>Total de Usuários: 8</h3>
        <div className={styles["user-cards"]}>
          <div className={styles["user-card"]}>
            <img src={userPic} alt="User" className={styles.userPic} />
            <h4>António Mateus</h4>
            <p className={styles.cargo}>Director de Operações</p>
            <p className={styles.direccao}>Direcção de Recursos Hídricos</p>
            <div className={styles.icons}>
              <img src={editIcon} alt="Edit" />
              <img src={deleteIcon} alt="Delete" />
            </div>
          </div>
          <div className={styles["user-card"]}>
            <img src={userPic} alt="User" className={styles.userPic} />
            <h4>António Mateus</h4>
            <p className={styles.cargo}>Director de Operações</p>
            <p className={styles.direccao}>Direcção de Recursos Hídricos</p>
            <div className={styles.icons}>
              <img src={editIcon} alt="Edit" />
              <img src={deleteIcon} alt="Delete" />
            </div>
          </div>
          <div className={styles["user-card"]}>
            <img src={userPic} alt="User" className={styles.userPic} />
            <h4>António Mateus</h4>
            <p className={styles.cargo}>Director de Operações</p>
            <p className={styles.direccao}>Direcção de Recursos Hídricos</p>
            <div className={styles.icons}>
              <img src={editIcon} alt="Edit" />
              <img src={deleteIcon} alt="Delete" />
            </div>
          </div>
          <div className={styles["user-card"]}>
            <img src={userPic} alt="User" className={styles.userPic} />
            <h4>António Mateus</h4>
            <p className={styles.cargo}>Director de Operações</p>
            <p className={styles.direccao}>Direcção de Recursos Hídricos</p>
            <div className={styles.icons}>
              <img src={editIcon} alt="Edit" />
              <img src={deleteIcon} alt="Delete" />
            </div>
          </div>
          <div className={styles["user-card"]}>
            <img src={userPic} alt="User" className={styles.userPic} />
            <h4>António Mateus</h4>
            <p className={styles.cargo}>Director de Operações</p>
            <p className={styles.direccao}>Direcção de Recursos Hídricos</p>
            <div className={styles.icons}>
              <img src={editIcon} alt="Edit" />
              <img src={deleteIcon} alt="Delete" />
            </div>
          </div>
          <div className={styles["user-card"]}>
            <img src={userPic} alt="User" className={styles.userPic} />
            <h4>António Mateus</h4>
            <p className={styles.cargo}>Director de Operações</p>
            <p className={styles.direccao}>Direcção de Recursos Hídricos</p>
            <div className={styles.icons}>
              <img src={editIcon} alt="Edit" />
              <img src={deleteIcon} alt="Delete" />
            </div>
          </div>
          <div className={styles["user-card"]}>
            <img src={userPic} alt="User" className={styles.userPic} />
            <h4>António Mateus</h4>
            <p className={styles.cargo}>Director de Operações</p>
            <p className={styles.direccao}>Direcção de Recursos Hídricos</p>
            <div className={styles.icons}>
              <img src={editIcon} alt="Edit" />
              <img src={deleteIcon} alt="Delete" />
            </div>
          </div>
          <div className={styles["user-card"]}>
            <img src={userPic} alt="User" className={styles.userPic} />
            <h4>António Mateus</h4>
            <p className={styles.cargo}>Director de Operações</p>
            <p className={styles.direccao}>Direcção de Recursos Hídricos</p>
            <div className={styles.icons}>
              <img src={editIcon} alt="Edit" />
              <img src={deleteIcon} alt="Delete" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
