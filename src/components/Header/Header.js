import React from "react";
import bell from "../../assets/bell.svg";
import profile from "../../assets/user.svg";
import logout from "../../assets/shutdown.svg";
import styles from "./Header.module.css";
import { Link, useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  async function handleLogout() {
    await sessionStorage.removeItem("simepUser");
    history.push("/login");
  }

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <h3>SIMEP</h3>
        </Link>
      </div>
      <nav className={styles.menu}>
        <ul>
          <li>
            <Link to="/notifications" className={styles.link}>
              <img
                src={bell}
                alt="Bell Notification"
                className={styles.icons}
              />
              Notificações
            </Link>
          </li>
          <li>
            <Link to="/profile" className={styles.link}>
              <img
                src={profile}
                alt="Bell Notification"
                className={styles.icons}
              />
              Perfil
            </Link>
          </li>
          <li className={(styles.link, styles.cursor)} onClick={handleLogout}>
            <img
              src={logout}
              alt="Bell Notification"
              className={styles.icons}
            />
            Sair
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
