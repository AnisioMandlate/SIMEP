import React, { useState } from "react";
import styles from "./Login.module.css";
import Input from "../Forms/Input";
import { Link } from "react-router-dom";
import api from "../services/api";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    api
      .post("sessions", { ...formData })
      .then(({ data }) => {
        sessionStorage.setItem(
          "simepUser",
          JSON.stringify({ token: data.token, id: data.id })
        );
      })
      .then(() => {
        history.push("/");
      })
      .catch((err) => {
        if (err?.response?.status === 400) {
          alert("Por favor, preencha correctamente seus dados!");
        }

        if (err?.response?.status === 401 || err?.response?.status === 404) {
          alert(err?.response?.data?.error);
        }
      });
  }

  return (
    <div className={styles.login}>
      <h4>
        Aceder ao sistema <span>SIMEP</span>
      </h4>
      <form onSubmit={handleSubmit}>
        <Input
          name="email"
          type="email"
          placeholder="Email"
          className={styles.input}
          onChange={handleChange}
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          className={styles.input}
          onChange={handleChange}
        />
        <button type="submit" className={styles["login-btn"]}>
          Aceder a minha conta
        </button>
        <Link to="/recover">Esqueceu a senha?</Link>
      </form>
    </div>
  );
};

export default Login;
