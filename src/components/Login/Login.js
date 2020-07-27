import React, { useState } from "react";
import styles from "./Login.module.css";
import Input from "../Forms/Input";
import { Link } from "react-router-dom";
import api from "../services/api";

const Login = () => {
  const [formData, setFormData] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    api.post("sessions", { ...formData }).then(({ data }) => console.log(data));
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
        <button className={styles["login-btn"]}>
          <Link to="/">Aceder a minha conta</Link>
        </button>
        <Link to="/recover">Esqueceu a senha?</Link>
      </form>
    </div>
  );
};

export default Login;
