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
  const [avatar_id, setAvatar_id] = useState(null);

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
      });
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
            />
            <Input
              name="gender"
              type="text"
              placeholder="Genero"
              value={formData["gender"]}
              onChange={handleInputChange}
            />
            <Input
              name="bi"
              type="text"
              placeholder="Bilhete de Identidade"
              value={formData["bi"]}
              onChange={handleInputChange}
            />
            <Input
              name="email"
              type="email"
              placeholder="Email"
              value={formData["email"]}
              onChange={handleInputChange}
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
            />
            <Input
              name="code"
              type="text"
              placeholder="Código de Trabalhador"
              value={formData["code"]}
              onChange={handleInputChange}
            />
            <Input
              name="nuit"
              type="text"
              placeholder="NUIT"
              value={formData["nuit"]}
              onChange={handleInputChange}
            />
            <Input
              name="phone"
              type="text"
              placeholder="Número de Celular"
              value={formData["phone"]}
              onChange={handleInputChange}
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
