import React from "react";
import styles from "../styles/Dashboard.module.css";
import Questions from "./Questions";
import { useSelector } from "react-redux";
import { sortedQ } from "./util/Sorting";

const Dashboard = () => {
  const state = useSelector((state) => state);
  const { answeredQSorted, unAnsweredQSorted } = sortedQ(state);
  const answeredQ = answeredQSorted.map((q) => q.id);
  const unAnsweredQ = unAnsweredQSorted.map((q) => q.id);

  return (
    <div className={styles.container}>
      <h3> Dashboard </h3>
      <div className={styles.questions}>
        <Questions answered={answeredQ} unAnswered={unAnsweredQ} />
      </div>
    </div>
  );
};

export default Dashboard;
