import React from "react";
import styles from "./Notification.module.css";
import deleteIcon from "../../assets/delete.svg";
import mail from "../../assets/mail.svg";

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
      <div className={styles["notification-body"]}>
        <div className={styles.message}>
          <div>
            <img src={mail} alt="Message" />
          </div>
          <div>
            <h4>Novo Registo de Edificio</h4>
            <p>
              Predio das Torres Vervelhas, Bairro Maputo Museu, distrito de
              Kamavoto
            </p>
          </div>
          <p>20 de Junho de 2020</p>
          <p>13:00:56</p>
          <img src={deleteIcon} alt="Deletar a mensagem" />
        </div>
      </div>
    </div>
  );
};

export default Notification;
