import React from "react";
import styles from "../styles/Dashboard.module.css";
import Questions from "./Questions";

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <h3> Dashboard </h3>
      <div className={styles.questions}>
        <Questions />
      </div>
    </div>
  );
};

export default Dashboard;
