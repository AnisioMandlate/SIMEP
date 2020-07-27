import React, { useState } from "react";
import Input from "../Forms/Input";
import styles from "./AddUser.module.css";
import Select from "../Forms/Select";
import ImageUpload from "../Forms/ImageUpload";
import api from "../services/api";
import { useHistory } from "react-router-dom";

const AddUser = () => {
  const history = useHistory();
  const [selectedProfile, setSelectedProfile] = useState("0");
  const [formData, setFormData] = useState({});
  const [selectedFile, setSelectedFile] = useState();

  function handleClick() {
    alert("Cancelar esta operação não terá volta");
    history.push("/users");
  }

  function handleSelected(event) {
    const profile = event.target.value;
    setSelectedProfile(profile);
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const profile = selectedProfile;

    const fileUpload = new FormData();
    if (selectedFile) {
      fileUpload.append("file", selectedFile);
    }

    api
      .post("files", fileUpload)
      .then(({ data }) => data)
      .then((data) =>
        api.post("users", { ...formData, profile, avatar_id: data })
      )
      .then(() => {
        alert("Usuario Criado!");
        history.push("/users");
      })
      .catch((err) => alert(`Erro: ${err.message}`));
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
              value={formData["name"]}
              onChange={handleInputChange}
              className={styles.input}
            />
            <Input
              name="gender"
              type="text"
              placeholder="Genero"
              value={formData["gender"]}
              onChange={handleInputChange}
              className={styles.input}
            />
            <Input
              name="bi"
              type="text"
              placeholder="Bilhete de Identidade"
              value={formData["bi"]}
              onChange={handleInputChange}
              className={styles.input}
            />
            <Input
              name="email"
              type="email"
              placeholder="Email"
              value={formData["email"]}
              onChange={handleInputChange}
              className={styles.input}
            />
            <Select
              placeholder="Perfil do Utilizador"
              options={[
                {
                  name: "Director de Operações",
                  value: "Director de Operações",
                },
                { name: "Técnico de Operações", value: "Técnico de Operações" },
                {
                  name: "Gestor de Projectos Sénior",
                  value: "Gestor de Projectos Sénior",
                },
                {
                  name: "Gestor de Projectos de Terceiros",
                  value: "Gestor de Projectos de Terceiros",
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
              value={formData["surname"]}
              onChange={handleInputChange}
              className={styles.input}
            />
            <Input
              name="code"
              type="text"
              placeholder="Código de Trabalhador"
              value={formData["code"]}
              onChange={handleInputChange}
              className={styles.input}
            />
            <Input
              name="nuit"
              type="text"
              placeholder="NUIT"
              value={formData["nuit"]}
              onChange={handleInputChange}
              className={styles.input}
            />
            <Input
              name="phone"
              type="text"
              placeholder="Número de Celular"
              value={formData["phone"]}
              onChange={handleInputChange}
              className={styles.input}
            />
            <Input
              name="password"
              type="password"
              placeholder="Coloque uma palavra-passe para o usuário"
              value={formData["password"]}
              onChange={handleInputChange}
              className={styles.input}
            />
          </div>
          <ImageUpload onFileUploaded={setSelectedFile} />
        </div>
      </form>
      <div className={styles.buttons}>
        <button className={styles["cancel-button"]} onClick={handleClick}>
          Cancelar
        </button>

        <button
          type="submit"
          className={styles["add-button"]}
          onClick={handleSubmit}
        >
          Registar
        </button>
      </div>
    </div>
  );
};

export default AddUser;
