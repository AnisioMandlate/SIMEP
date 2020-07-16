import React, { useState, useEffect } from "react";
import styles from "./UsersList.module.css";
import deleteIcon from "../../assets/delete.svg";
import editIcon from "../../assets/edit.svg";
import addBtn from "../../assets/add.svg";
import { Link } from "react-router-dom";
import api from "../services/api";

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get("users").then((response) => {
      setUsers(response.data);
    });
  }, []);

  const handleDelete = () => {
    console.log("I was clicked");
  };

  return (
    <div className={styles.user}>
      <div className={styles["user-content"]}>
        <h3 className={styles["user-heading"]}>
          Total de Usuários: {users.length}
        </h3>
        <div className={styles["user-cards"]}>
          {users.map((user) => (
            <Link to={`/users/${user.id}`} key={user.id}>
              <div className={styles["user-card"]}>
                <img
                  src={user.avatar.url}
                  alt="User"
                  className={styles.userPic}
                />
                <h4>
                  {user.name} {user.surname}
                </h4>
                <p className={styles.cargo}>{user.profile}</p>
                <div className={styles.icons}>
                  <Link to="/add-user">
                    <img src={editIcon} alt="Edit" />
                  </Link>
                  <img src={deleteIcon} alt="Delete" onClick={handleDelete} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Link to="/add-user">
        <button className={styles["add-user"]}>
          <img src={addBtn} alt="Add User button" />
        </button>
      </Link>
    </div>
  );
};

export default User;
