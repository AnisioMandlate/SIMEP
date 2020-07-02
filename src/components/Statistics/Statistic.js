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
            <h5>Tipo de Edifício</h5>
            <hr />
            <Chart
              width={"300px"}
              height={"300px"}
              chartType="PieChart"
              loader={<div>Loading Chart</div>}
              data={[
                ["Building", "Quantity"],
                ["Edifício Administrativo", 10],
                ["Edifício Escolar", 2],
                ["Edifício Desportivo", 2],
                ["Edifício Hospital", 2],
                ["Outros Edifícios", 7],
              ]}
              options={{
                legend: "bottom",
              }}
              rootProps={{ "data-testid": "1" }}
            />
          </div>
          <div>
            <h5>Distribuição de Edifícios por Tipo de Parede</h5>
            <hr />
            <Chart
              width={"300px"}
              height={"300px"}
              chartType="PieChart"
              loader={<div>Loading Chart</div>}
              data={[
                ["Material", "Number of materials"],
                ["Bloco de Betão", 11],
                ["Tijolo Cerâmico", 6],
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
            <h5>Distribuição por Tipo de Pavimento</h5>
            <hr />
            <Chart
              width={"300px"}
              height={"300px"}
              chartType="PieChart"
              loader={<div>Loading Chart</div>}
              data={[
                ["Building", "Number of Buildings"],
                ["Edifício Administrativo", 11],
                ["Edifício Escolar", 5],
                ["Edifício Desportivo", 4],
                ["Edifício Hospital", 3],
                ["Outros Edifícios", 9],
              ]}
              options={{
                legend: {
                  position: "bottom",
                },
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
