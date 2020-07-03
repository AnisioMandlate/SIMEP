import React, { useState, useEffect } from "react";
import styles from "./UsersList.module.css";
import deleteIcon from "../../assets/delete.svg";
import editIcon from "../../assets/edit.svg";
import addBtn from "../../assets/add.svg";
import { Link } from "react-router-dom";
import { getUsers } from "./services";

const User = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers().then((result) => setUser(result));
  }, []);

  const handleDelete = () => {
    console.log("I was clicked");
  };

  return (
    <div className={styles.user}>
      <div className={styles["user-content"]}>
        <h3 className={styles["user-heading"]}>
          Total de Utilizadores: {users.length}
        </h3>
        <div className={styles["user-cards"]}>
          {users.map((user) => (
            <div className={styles["user-card"]} key={user.id}>
              <img src={user.image} alt="User" className={styles.userPic} />
              <h4>{user.name}</h4>
              <p className={styles.cargo}>{user.position}</p>
              <p className={styles.direccao}>{user.office}</p>
              <div className={styles.icons}>
                <Link to="/addUser">
                  <img src={editIcon} alt="Edit" />
                </Link>
                <img src={deleteIcon} alt="Delete" onClick={handleDelete} />
              </div>
            </div>
          ))}
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
