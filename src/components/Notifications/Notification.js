import React, { useEffect, useState } from "react";
import styles from "./Notification.module.css";
import deleteIcon from "../../assets/delete.svg";
import Checkbox from "../Forms/Checkbox";
import Select from "../Forms/Select";

import { getNotifications } from "./services";

const Notification = () => {
  const [notifica, setNotification] = useState([]);

  useEffect(() => {
    getNotifications().then((result) => setNotification(result));
  }, []);

  const handleClick = () => {
    alert("I was clicked");
  };

  return (
    <div className={styles.notification}>
      <div className={styles["notification-header"]}>
        <div>
          <p className={styles["notification-para"]}>
            {notifica.length}{" "}
            {notifica.length !== 1 ? `Notificações` : `Notificação`}{" "}
          </p>
        </div>
        <div className={styles.options}>
          <Checkbox />
          <label>Selecionar</label>
          <Select
            placeholder="Filtrar"
            options={[
              { name: "Mensagens Lidas", value: "mensangens lidas" },
              { name: "Mensagens Não Lidas", value: "mensagens não lidas" },
            ]}
          />
        </div>
      </div>
      <hr />
      <div className={styles["notification-body"]}>
        <table>
          <tbody>
            {notifica.map((notificas) => (
              <tr key={notificas.id}>
                <td>
                  <img
                    src={notificas.state}
                    alt="Message"
                    className={styles.icons}
                  />
                </td>
                <td>
                  <h4>{notificas.title}</h4>
                  <p> {notificas.message} </p>
                </td>
                <td>{notificas.date}</td>
                <td>{notificas.time}</td>
                <td>
                  <img
                    src={deleteIcon}
                    alt="Deletar mensagem"
                    className={styles.icons}
                    onClick={handleClick}
                  />
                </td>
              </tr>
            ))}

            {/* <tr>
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
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Notification;
