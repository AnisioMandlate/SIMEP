import React from "react";
import logo from "../../assets/homely.svg";
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
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <nav className={styles.menu}>
        <ul>
          <Link to="/notifications" className={styles.link}>
            <img src={bell} alt="Bell Notification" className={styles.icons} />
            <li>Notificações</li>
          </Link>
          <Link to="/profile" className={styles.link}>
            <img src={profile} alt="Profile" className={styles.icons} />
            <li>Perfil</li>
          </Link>
          <Link to="/notifications" className={styles.link}>
            <img src={logout} alt="Logout" className={styles.icons} />
            <li>Sair</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
