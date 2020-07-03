import React, { useEffect, useState } from "react";
import styles from "./Building.module.css";
import Input from "../Forms/Input";
import Select from "../Forms/Select";

import { getBuildings, getBuildingByName } from "./services";

const Building = () => {
  const [buildings, setBuildings] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    getBuildings().then((result) => setBuildings(result));
  }, []);

  const handleSearch = (event) => {
    const { value } = event.target;
    getBuildingByName(value).then((builds) => setBuildings(builds));
    setSearchInput(value);
  };

  return (
    <div className={styles.building}>
      <div className={styles["building-header"]}>
        <p>
          {buildings.length}{" "}
          {buildings.length !== 1
            ? `Edifícios registados`
            : `Edifício registado`}{" "}
        </p>
        <Input
          name="search"
          value={searchInput}
          onChange={handleSearch}
          type="search"
          placeholder="Pesquisar Edificio"
        />
      </div>
      <hr />
      <div className={styles["building-content"]}>
        <div className={styles.filters}>
          <h3>Filtros</h3>
          <hr />
          <Select
            placeholder="Tipo de Edificio"
            options={[
              { name: "Monumento", value: "monumento" },
              { name: "Escolar", value: "escolar" },
              { name: "Administrativo", value: "administrativo" },
              { name: "Jardim", value: "jardim" },
            ]}
          />
          <Select
            placeholder="Localização"
            options={[
              { name: "Monumento", value: "monumento" },
              { name: "Escolar", value: "escolar" },
              { name: "Administrativo", value: "administrativo" },
              { name: "Jardim", value: "jardim" },
            ]}
          />
          <Select
            placeholder="Cobertura"
            options={[
              { name: "Monumento", value: "monumento" },
              { name: "Escolar", value: "escolar" },
              { name: "Administrativo", value: "administrativo" },
              { name: "Jardim", value: "jardim" },
            ]}
          />
          <Select
            placeholder="Parede"
            options={[
              { name: "Monumento", value: "monumento" },
              { name: "Escolar", value: "escolar" },
              { name: "Administrativo", value: "administrativo" },
              { name: "Jardim", value: "jardim" },
            ]}
          />
          <Select
            placeholder="Pavimento"
            options={[
              { name: "Monumento", value: "monumento" },
              { name: "Escolar", value: "escolar" },
              { name: "Administrativo", value: "administrativo" },
              { name: "Jardim", value: "jardim" },
            ]}
          />
          <Select
            placeholder="Galeria"
            options={[
              { name: "Monumento", value: "monumento" },
              { name: "Escolar", value: "escolar" },
              { name: "Administrativo", value: "administrativo" },
              { name: "Jardim", value: "jardim" },
            ]}
          />
          <Select
            placeholder="Conservação"
            options={[
              { name: "Monumento", value: "monumento" },
              { name: "Escolar", value: "escolar" },
              { name: "Administrativo", value: "administrativo" },
              { name: "Jardim", value: "jardim" },
            ]}
          />
        </div>
        <div className={styles.buildings}>
          <h3>Edifícios</h3>
          <hr className={styles["horizontal-line"]} />
          <div className={styles["grid-cards"]}>
            {buildings.map((build) => (
              <div key={build.id} className={styles["grid-card"]}>
                <img src={build.image} alt="Escola" />
                <h5>{build.name}</h5>
                <div className={styles["grid-footer"]}>
                  <p id="escola">{build.type}</p>
                  <p>{build.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Building;
