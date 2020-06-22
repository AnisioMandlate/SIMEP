import React from "react";
import Input from "../Forms/Input";
import styles from "./AddUser.module.css";
import Select from "../Forms/Select";
import { Link } from "react-router-dom";
import ImageUpload from "../Forms/ImageUpload";

const AddUser = () => {
  function handleSubmit() {
    console.log("I'm being submited");
  }

  return (
    <div className={styles.geral}>
      <form onSubmit={handleSubmit}>
        <div className={styles.addUser}>
          <div className={styles["form-column"]}>
            <Input
              name="nome"
              type="text"
              placeholder="Nome"
              value=""
              required
            />
            <Input
              name="genero"
              type="text"
              placeholder="Genero"
              value=""
              required
            />
            <Input
              name="id"
              type="text"
              placeholder="Bilhete de Identidade"
              value=""
              required
            />
            <Input
              name="email"
              type="email"
              placeholder="Email"
              value=""
              required
            />
            <Select
              default="Perfil do Utilizador"
              option1="Director de Operações"
              option2="Técnico de Operações"
              option3="Gestor de Projectos Sénior"
              option4="Gestor de Projectos de Terceiros"
            />
          </div>
          <div className={styles["form-column"]}>
            <Input
              name="lastName"
              type="text"
              placeholder="Apelido"
              value=""
              required
            />
            <Input
              name="employeeId"
              type="text"
              placeholder="Código de Trabalhador"
              value=""
              required
            />
            <Input
              name="nuit"
              type="text"
              placeholder="NUIT"
              value=""
              required
            />
            <Input
              name="cellphone"
              type="text"
              placeholder="Número de Celular"
              value=""
              required
            />
          </div>
          <div className={styles["form-column"]}>
            <ImageUpload />
          </div>
        </div>
        <div className={styles.buttons}>
          <Link to="/users">
            <button className={styles["cancel-button"]}>Cancelar</button>
          </Link>
          <button type="submit" className={styles["add-button"]}>
            Registar
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
