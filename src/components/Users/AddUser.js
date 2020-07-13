import React, { useState } from "react";
import Input from "../Forms/Input";
import styles from "./AddUser.module.css";
import Select from "../Forms/Select";
import ImageUpload from "../Forms/ImageUpload";
import api from "../services/api";

const AddUser = () => {
  const [selectedProfile, setSelectedProfile] = useState("0");
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    gender: "",
    bi: "",
    email: "",
    nuit: "",
    phone: "",
  });

  function handleClick() {
    console.log("I was cleared");
  }

  function handleSelected(event) {
    const profile = event.target.value;
    setSelectedProfile(profile);
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const { name, surname, gender, bi, email, nuit, phone } = formData;
    const profile = selectedProfile;

    const data = {
      name,
      surname,
      gender,
      bi,
      email,
      nuit,
      phone,
      profile,
    };

    await api.post("users", data);
    alert("Usuario Criado!");
  }

  return (
    <div className={styles.geral}>
      <form onSubmit={handleSubmit}>
        <div className={styles.addUser}>
          <div className={styles["form-column"]}>
            <Input
              name="name"
              type="text"
              placeholder="Nome"
              value=""
              required
              onChange={handleInputChange}
            />
            <Input
              name="gender"
              type="text"
              placeholder="Genero"
              value=""
              required
              onChange={handleInputChange}
            />
            <Input
              name="bi"
              type="text"
              placeholder="Bilhete de Identidade"
              value=""
              required
              onChange={handleInputChange}
            />
            <Input
              name="email"
              type="email"
              placeholder="Email"
              value=""
              required
              onChange={handleInputChange}
            />
            <Select
              placeholder="Perfil do Utilizador"
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
              onChange={handleSelected}
            />
          </div>
          <div className={styles["form-column"]}>
            <Input
              name="surname"
              type="text"
              placeholder="Apelido"
              value=""
              required
              onChange={handleInputChange}
            />
            <Input
              name="code"
              type="text"
              placeholder="Código de Trabalhador"
              value=""
              required
              onChange={handleInputChange}
            />
            <Input
              name="nuit"
              type="text"
              placeholder="NUIT"
              value=""
              required
              onChange={handleInputChange}
            />
            <Input
              name="phone"
              type="text"
              placeholder="Número de Celular"
              value=""
              required
              onChange={handleInputChange}
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

export default AddUser;
