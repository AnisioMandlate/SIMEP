import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Sistema para Mapeamento de Edificios Publicos &copy; Copyright 2020.
        Todos Direitos Reservados
      </p>
    </footer>
  );
};

export default Footer;
