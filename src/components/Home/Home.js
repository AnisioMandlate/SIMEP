import React from "react";
import styles from "./Home.module.css";
import buildings from "../../assets/urban.svg";
import pieChart from "../../assets/pie-chart.svg";
import users from "../../assets/group.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={styles.home}>
      <Link to="../Buildings/Building.js" className={styles.link}>
        <div>
          <img src={buildings} alt="Gestão de Edifícios" />
          <hr />
          <p>Gestão de Edifícios</p>
        </div>
      </Link>
      <Link to="../Statistics/Statistic.js" className={styles.link}>
        <div>
          <img src={pieChart} alt="Estatísticas" />
          <hr />
          <p>Estatísticas</p>
        </div>
      </Link>

      <Link to="../Users/User.js" className={styles.link}>
        <div>
          <img src={users} alt="Gestão de utilizadores" />
          <hr />
          <p>Gestão de utilizadores</p>
        </div>
      </Link>
    </div>
  );
};

export default Home;
