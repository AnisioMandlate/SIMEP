import React from "react";
import styles from "./Notification.module.css";
const Notification = () => {
  return (
    <div className={styles.notification}>
      <div className={styles["notification-header"]}>
        <div>
          <p>05 Notificações</p>
        </div>
        <div className={styles.options}>
          <p>Selecionar</p>
          <p>Filtrar</p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Notification;
