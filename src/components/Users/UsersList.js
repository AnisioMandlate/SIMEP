import React from "react";
import styles from "./UsersList.module.css";
import userPic from "../../assets/profile-pic.jpg";
import deleteIcon from "../../assets/delete.svg";
import editIcon from "../../assets/edit.svg";
import addBtn from "../../assets/add.svg";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <div className={styles.user}>
      <div className={styles["user-content"]}>
        <h3 className={styles["user-heading"]}>Total de Utilizadores: 6</h3>
        <div className={styles["user-cards"]}>
          <div className={styles["user-card"]}>
            <img src={userPic} alt="User" className={styles.userPic} />
            <h4>António Mateus</h4>
            <p className={styles.cargo}>Director de Operações</p>
            <p className={styles.direccao}>Direcção de Recursos Hídricos</p>
            <div className={styles.icons}>
              <Link to="/addUser">
                <img src={editIcon} alt="Edit" />
              </Link>
              <img src={deleteIcon} alt="Delete" />
            </div>
          </div>
          <div className={styles["user-card"]}>
            <img src={userPic} alt="User" className={styles.userPic} />
            <h4>António Mateus</h4>
            <p className={styles.cargo}>Director de Operações</p>
            <p className={styles.direccao}>Direcção de Recursos Hídricos</p>
            <div className={styles.icons}>
              <Link to="/addUser">
                <img src={editIcon} alt="Edit" />
              </Link>
              <img src={deleteIcon} alt="Delete" />
            </div>
          </div>
          <div className={styles["user-card"]}>
            <img src={userPic} alt="User" className={styles.userPic} />
            <h4>António Mateus</h4>
            <p className={styles.cargo}>Director de Operações</p>
            <p className={styles.direccao}>Direcção de Recursos Hídricos</p>
            <div className={styles.icons}>
              <Link to="/addUser">
                <img src={editIcon} alt="Edit" />
              </Link>
              <img src={deleteIcon} alt="Delete" />
            </div>
          </div>
          <div className={styles["user-card"]}>
            <img src={userPic} alt="User" className={styles.userPic} />
            <h4>António Mateus</h4>
            <p className={styles.cargo}>Director de Operações</p>
            <p className={styles.direccao}>Direcção de Recursos Hídricos</p>
            <div className={styles.icons}>
              <Link to="/addUser">
                <img src={editIcon} alt="Edit" />
              </Link>
              <img src={deleteIcon} alt="Delete" />
            </div>
          </div>
          <div className={styles["user-card"]}>
            <img src={userPic} alt="User" className={styles.userPic} />
            <h4>António Mateus</h4>
            <p className={styles.cargo}>Director de Operações</p>
            <p className={styles.direccao}>Direcção de Recursos Hídricos</p>
            <div className={styles.icons}>
              <Link to="/addUser">
                <img src={editIcon} alt="Edit" />
              </Link>
              <img src={deleteIcon} alt="Delete" />
            </div>
          </div>
          <div className={styles["user-card"]}>
            <img src={userPic} alt="User" className={styles.userPic} />
            <h4>António Mateus</h4>
            <p className={styles.cargo}>Director de Operações</p>
            <p className={styles.direccao}>Direcção de Recursos Hídricos</p>
            <div className={styles.icons}>
              <Link to="/addUser">
                <img src={editIcon} alt="Edit" />
              </Link>
              <img src={deleteIcon} alt="Delete" />
            </div>
          </div>
        </div>
      </div>
      <Link to="/addUser">
        <button className={styles["add-user"]}>
          <img src={addBtn} alt="Add User button" />
        </button>
      </Link>
    </div>
  );
};

export default User;
