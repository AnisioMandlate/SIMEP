import React from "react";
import styles from "./Recover.module.css";
import Input from "../Forms/Input";
import { Link } from "react-router-dom";

const Recover = () => {
  return (
    <div className={styles.recover}>
      <h4>
        Recuperar senha de acesso <span>SIMEP</span>
      </h4>
      <form>
        <Input
          name="email"
          type="email"
          placeholder="Email de registo da sua Conta"
          autoComplete="on"
          required
        />
        <button className={styles["recover-btn"]}>
          <Link to="/recover-password">Recuperar Conta</Link>
        </button>
        <p>OU</p>
        <Link to="/">
          <h4>
            Aceder ao sistema <span>SIMEP</span>
          </h4>
        </Link>
      </form>
    </div>
  );
};

export default Recover;
