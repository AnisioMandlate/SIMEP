import React, { useState } from "react";
import styles from "./RecoverPassword.module.css";
import Input from "../Forms/Input";
import api from "../services/api";
import { useHistory } from "react-router-dom";

const RecoverPassword = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({});
  const [email, setEmail] = useState();
  const userId = JSON.parse(sessionStorage.getItem("simepUser")).id;

  api.get(`/users/${userId}`).then(({ data }) => setEmail(data.email));

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    api
      .post("sessions", { email, ...formData })

      .then(() => {
        history.push("/login");
      })
      .catch((err) => {
        if (err.response === 400) {
          alert("Por favor, preencha correctamente seus dados!");
        }

        if (err.response === 401 || err.response === 404) {
          alert(err.response.data.error);
        }
      });
  }

  return (
    <div className={styles["recover-password"]}>
      <h4>
        Nova senha de acesso<span>SIMEP</span>
      </h4>
      <form onSubmit={handleSubmit}>
        <Input
          name="password"
          type="password"
          placeholder="Nova Password"
          onChange={handleChange}
        />
        <button type="submit" className={styles["login-btn"]}>
          Guardar Senha
        </button>
      </form>
    </div>
  );
};

export default RecoverPassword;
