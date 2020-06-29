import React, { Component } from "react";
import styles from "./Statistic.module.css";
import printer from "../../assets/print.svg";
import { Chart } from "react-google-charts";

class Statistic extends Component {
  render() {
    return (
      <div className={styles.statistic}>
        <div className={styles.print}>
          <button>
            <img src={printer} alt="Print page" />
          </button>
        </div>
        <hr />
        <div className={styles.graphs}>
          <div>
            <h5>Tipo de Edificio</h5>
            <hr />
            <Chart
              width={"300px"}
              height={"300px"}
              chartType="PieChart"
              loader={<div>Loading Chart</div>}
              data={[
                ["Building", "Quantity"],
                ["Edificio Administrativo", 10],
                ["Edificio Escolar", 2],
                ["Edificio Desportivo", 2],
                ["Edificio Hospital", 2],
                ["Outros Edificios", 7],
              ]}
              options={{
                legend: "bottom",
              }}
              rootProps={{ "data-testid": "1" }}
            />
          </div>
          <div>
            <h5>Distribuicao de Edificios por Tipo de Parede</h5>
            <hr />
            <Chart
              width={"300px"}
              height={"300px"}
              chartType="PieChart"
              loader={<div>Loading Chart</div>}
              data={[
                ["Material", "Number of materials"],
                ["Bloco de Betao", 11],
                ["Tijolo Ceramico", 6],
                ["Madeira e Zinco", 8],
                ["Outro", 7],
              ]}
              options={{
                legend: "bottom",
              }}
              rootProps={{ "data-testid": "1" }}
            />
          </div>
          <div>
            <h5>Distribuicao por Tipo de Pavimento</h5>
            <hr />
            <Chart
              width={"300px"}
              height={"300px"}
              chartType="PieChart"
              loader={<div>Loading Chart</div>}
              data={[
                ["Building", "Number of Buildings"],
                ["Edificio Administrativo", 11],
                ["Edificio Escolar", 5],
                ["Edificio Desportivo", 4],
                ["Edificio Hospital", 2],
                ["Outros Edificios", 9],
              ]}
              options={{
                legend: "bottom",
              }}
              rootProps={{ "data-testid": "1" }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Statistic;
