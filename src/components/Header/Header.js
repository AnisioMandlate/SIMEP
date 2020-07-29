import React from "react";
import bell from "../../assets/bell.svg";
import profile from "../../assets/user.svg";
import logout from "../../assets/shutdown.svg";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
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
          <li>
            <Link to="/" className={styles.link}>
              <img
                src={logout}
                alt="Bell Notification"
                className={styles.icons}
              />
              Sair
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
