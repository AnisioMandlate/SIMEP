import React from "react";
import styles from "./Building.module.css";
import Input from "../Forms/Input";
import Select from "../Forms/Select";
import hospital from "../../assets/hospital.jpeg";
import garden from "../../assets/garden.jpg";
import monument from "../../assets/monumental.jpg";
import monumental2 from "../../assets/monumental2.jpeg";
import school from "../../assets/school.jpeg";
import administrative from "../../assets/administrative.jpg";

const Building = () => {
  return (
    <div className={styles.building}>
      <div className={styles["building-header"]}>
        <p>300 Edifícios registados</p>
        <Input name="search" type="search" placeholder="Pesquisar Edificio" />
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
            <div className={styles["grid-card"]}>
              <img src={school} alt="Escola" />
              <h5>Escola S. Josina Machel</h5>
              <div className={styles["grid-footer"]}>
                <p id="escola">Escola</p>
                <p>Bairro Albazine A</p>
              </div>
            </div>
            <div className={styles["grid-card"]}>
              <img src={administrative} alt="Escola" />
              <h5>Edificio Municipal</h5>
              <div className={styles["grid-footer"]}>
                <p id="administrativo">Administrativo</p>
                <p>Bairro Central</p>
              </div>
            </div>
            <div className={styles["grid-card"]}>
              <img src={hospital} alt="Escola" />
              <h5>Hospital Central de Maputo</h5>
              <div className={styles["grid-footer"]}>
                <p id="hospital">Hospital</p>
                <p>Bairro do Museu</p>
              </div>
            </div>
            <div className={styles["grid-card"]}>
              <img src={garden} alt="Escola" />
              <h5>Jardim dos Professores</h5>
              <div className={styles["grid-footer"]}>
                <p id="jardim">Jardim</p>
                <p>Bairro do Museu</p>
              </div>
            </div>
            <div className={styles["grid-card"]}>
              <img src={monument} alt="Escola" />
              <h5>Fortaleza de Maputo</h5>
              <div className={styles["grid-footer"]}>
                <p id="monumento">Monumento</p>
                <p>Bairro Central</p>
              </div>
            </div>
            <div className={styles["grid-card"]}>
              <img src={monumental2} alt="Escola" />
              <h5>Museu da Mueda</h5>
              <div className={styles["grid-footer"]}>
                <p id="monumento">Monumento</p>
                <p>Bairro do Museu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Building;
