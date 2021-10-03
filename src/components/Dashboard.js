import React from "react";
import { getAnsweredQ, getUnAnsweredQ } from "../store/authUser";
import styles from "../styles/Dashboard.module.css";
import Questions from "./Questions";
import { useSelector } from "react-redux";

const Dashboard = () => {
  // const actvUser = useSelector((state) => state.auth);
  const answeredQ = useSelector((state) => getAnsweredQ(state));
  const unAnsweredQ = useSelector((state) => getUnAnsweredQ(state));
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
