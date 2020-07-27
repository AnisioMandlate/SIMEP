import React from "react";
import styles from "./RecoverPassword.module.css";
import Input from "../Forms/Input";
import { Link } from "react-router-dom";

const RecoverPassword = () => {
  return (
    <div className={styles["recover-password"]}>
      <h4>
        Nova senha de acesso<span>SIMEP</span>
      </h4>
      <form>
        <Input name="newpassword" type="password" placeholder="Nova Password" />
        <Input
          name="newpassword"
          type="password"
          placeholder="Confirmar nova password"
        />
        <button className={styles["login-btn"]}>
          <Link to="/login">Guardar Senha</Link>
        </button>
      </form>
    </div>
  );
};

export default RecoverPassword;
