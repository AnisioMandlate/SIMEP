import React from "react";
import notFound from "../../assets/error-404.svg";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.main}>
      <img src={notFound} alt="Imagem de erro" />
      <h1>A página que procura não existe</h1>
    </div>
  );
};

export default NotFound;
