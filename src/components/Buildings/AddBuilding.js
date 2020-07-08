import React from "react";
import Input from "../Forms/Input";
import styles from "./AddBuilding.module.css";
import Select from "../Forms/Select";
// import { Link } from "react-router-dom";
import ImageUpload from "../Forms/ImageUpload";

const AddBuilding = () => {
  function handleClick() {
    console.log("I was cleared");
  }

  return (
    <div className={styles.geral}>
      <form id="user-form">
        <div className={styles.addBuilding}>
          <div className={styles["form-column"]}>
            <h3>Dados do Edifício</h3>
            <Input
              name="buildingName"
              type="text"
              placeholder="Nome do Edifício"
              value=""
              required
            />
            <Input
              name="location"
              type="text"
              placeholder="Localização"
              value=""
              required
            />
            <Select
              placeholder="Tipo de Edifício"
              options={[
                {
                  name: "Administrativo",
                  value: "Administrativo",
                },
                {
                  name: "Escola",
                  value: "escola",
                },
                {
                  name: "Hospital",
                  value: "hospital",
                },
                {
                  name: "Jardim",
                  value: "jardim",
                },

                { name: "Monumento", value: "monumento" },
              ]}
            />
          </div>
          <div className={styles["form-column"]}>
            <h3>Dados do Registador</h3>
            <Input
              name="name"
              type="text"
              placeholder="Nome"
              value=""
              required
            />
            <Input
              name="date"
              type="text"
              placeholder="Data de Registo (dd/mm/aaaa)"
              value=""
              required
            />
            <Select
              placeholder="Perfil do Reistador"
              options={[
                {
                  name: "Director de Operações",
                  value: "director de operações",
                },
                { name: "Técnico de Operações", value: "técnico de operações" },
                {
                  name: "Gestor de Projectos Sénior",
                  value: "gestor de projectos sénior",
                },
                {
                  name: "Gestor de Projectos de Terceiros",
                  value: "gestor de projectos de terceiros",
                },
              ]}
            />
          </div>
          <ImageUpload />
        </div>
        <div className={styles.buttons}>
          <button className={styles["cancel-button"]} onClick={handleClick()}>
            Cancelar
          </button>

          <button type="submit" className={styles["add-button"]}>
            Registar
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBuilding;
