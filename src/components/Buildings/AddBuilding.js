import React, { useState } from "react";
import Input from "../Forms/Input";
import styles from "./AddBuilding.module.css";
import Select from "../Forms/Select";
// import { Link } from "react-router-dom";
import ImageUpload from "../Forms/ImageUpload";
import api from "../services/api";
import { useHistory } from "react-router-dom";

const AddBuilding = () => {
  const history = useHistory();
  const [selectedProfile, setSelectedProfile] = useState("0");
  const [formData, setFormData] = useState({});
  const [selectedFile, setSelectedFile] = useState();
  const [selectedType, setSelectedType] = useState();
  function handleClick() {
    console.log("I was cleared");
  }

  function handleSelectedType(event) {
    const type = event.target.value;
    setSelectedType(type);
  }

  function handleSelectedProfile(event) {
    const profile = event.target.value;
    setSelectedProfile(profile);
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const register_profile = selectedProfile;
    const type = selectedType;

    const fileUpload = new FormData();
    if (selectedFile) {
      fileUpload.append("file", selectedFile);
    }

    api
      .post("files", fileUpload)
      .then(({ data }) => data)
      .then((data) =>
        api.post("buildings", {
          ...formData,
          type,
          image_id: data,
          register_profile,
        })
      )
      .then(() => {
        alert("Edifício criado!");
        history.push("/buildings");
      });
  }

  return (
    <div className={styles.geral}>
      <form onSubmit={handleSubmit}>
        <div className={styles.addBuilding}>
          <div className={styles["form-column"]}>
            <h3>Dados do Edifício</h3>
            <Input
              name="name"
              type="text"
              placeholder="Nome do Edifício"
              value={formData["name"]}
              onChange={handleInputChange}
              className={styles.input}
            />
            <Input
              name="location"
              type="text"
              placeholder="Localização"
              value={formData["location"]}
              onChange={handleInputChange}
              className={styles.input}
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
                  value: "Escola",
                },
                {
                  name: "Hospital",
                  value: "Hospital",
                },
                {
                  name: "Jardim",
                  value: "Jardim",
                },

                { name: "Monumento", value: "Monumento" },
              ]}
              onChange={handleSelectedType}
            />
          </div>
          <div className={styles["form-column"]}>
            <h3>Dados do Registador</h3>
            <Input
              name="register_name"
              type="text"
              placeholder="Nome"
              value={formData["register_name"]}
              onChange={handleInputChange}
              className={styles.input}
            />
            <Select
              placeholder="Perfil do Registador"
              options={[
                {
                  name: "Director de Operações",
                  value: "Director de operações",
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
              onChange={handleSelectedProfile}
            />
          </div>
          <ImageUpload onFileUploaded={setSelectedFile} />
        </div>
        <div className={styles.buttons}>
          <button className={styles["cancel-button"]} onClick={handleClick}>
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
