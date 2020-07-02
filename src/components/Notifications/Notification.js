import React from "react";
import styles from "./Notification.module.css";
import deleteIcon from "../../assets/delete.svg";
import mail from "../../assets/mail.svg";
import readMail from "../../assets/read-mail.svg";

const Notification = () => {
  return (
    <div className={styles.notification}>
      <div className={styles["notification-header"]}>
        <div>
          <p className={styles["notification-para"]}>05 Notificações</p>
        </div>
        <div className={styles.options}>
          <p>Selecionar</p>
          <p>Filtrar</p>
        </div>
      </div>
      <hr />
      <div className={styles["notification-body"]}>
        <table>
          <tbody>
            <tr>
              <td>
                <img src={mail} alt="Message" className={styles.icons} />
              </td>
              <td>
                <h4>Novo Registo de Edifício</h4>
                <p>
                  Predio das Torres Vervelhas, Bairro Maputo Museu, distrito de
                  Kamavoto
                </p>
              </td>
              <td>20 de Junho de 2020</td>
              <td>13:00:56</td>
              <td>
                <img
                  src={deleteIcon}
                  alt="Deletar a mensagem"
                  className={styles.icons}
                />
              </td>
            </tr>
            <tr>
              <td>
                <img src={mail} alt="Message" className={styles.icons} />
              </td>
              <td>
                <h4>Novo Registo de Edifício</h4>
                <p>
                  Predio das Torres Vervelhas, Bairro Maputo Museu, distrito de
                  Kamavoto
                </p>
              </td>
              <td>20 de Junho de 2020</td>
              <td>13:00:56</td>
              <td>
                <img
                  src={deleteIcon}
                  alt="Deletar a mensagem"
                  className={styles.icons}
                />
              </td>
            </tr>
            <tr>
              <td>
                <img src={readMail} alt="Message" className={styles.icons} />
              </td>
              <td>
                <h4>Novo Registo de Edifício</h4>
                <p>
                  Predio das Torres Vervelhas, Bairro Maputo Museu, distrito de
                  Kamavoto
                </p>
              </td>
              <td>20 de Junho de 2020</td>
              <td>13:00:56</td>
              <td>
                <img
                  src={deleteIcon}
                  alt="Deletar a mensagem"
                  className={styles.icons}
                />
              </td>
            </tr>
            <tr>
              <td>
                <img src={mail} alt="Message" className={styles.icons} />
              </td>
              <td>
                <h4>Alteração de dados de registo de usuario</h4>
                <p>
                  Marcos Antônio, Departamento de Operações, Técnico de Registo
                  e acompanhamento do SIMEP
                </p>
              </td>
              <td>31 de Marco de 2020</td>
              <td>12:00:00</td>
              <td>
                <img
                  src={deleteIcon}
                  alt="Deletar a mensagem"
                  className={styles.icons}
                />
              </td>
            </tr>
            <tr>
              <td>
                <img src={readMail} alt="Message" className={styles.icons} />
              </td>
              <td>
                <h4>Alteração de dados de registo de usuario</h4>
                <p>
                  Claudio Mendes, Departamento de Operações, Técnico de Registo
                  e acompanhamento do SIMEP
                </p>
              </td>
              <td>29 de Marco de 2020</td>
              <td>10:00:20</td>
              <td>
                <img
                  src={deleteIcon}
                  alt="Deletar a mensagem"
                  className={styles.icons}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Notification;
