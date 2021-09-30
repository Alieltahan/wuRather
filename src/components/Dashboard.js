import React from "react";
import { Route } from "react-router";
import styles from "../styles/Dashboard.module.css";
import Questions from "./Questions";
import { NavLink } from "react-router-dom";
import AnsweredQuestions from "./AnsweredQuestions";
import UnAnsweredQuestions from "./UnAnsweredQuestions";

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <h3> Dashboard </h3>
      <div className={styles.questions}>
        <Questions />
        <Route
          path="/Dashboard/answeredQuestions"
          component={AnsweredQuestions}
        />
        <Route
          path="/Dashboard/unansweredQuestions"
          component={UnAnsweredQuestions}
        />
      </div>
    </div>
  );
};

export default Dashboard;
