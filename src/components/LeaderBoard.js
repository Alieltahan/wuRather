import React from "react";
import { useSelector } from "react-redux";
import styles from "../styles/Leaderboard.module.css";
import { sortedUsers } from "./util/Sorting";

const LeaderBoard = () => {
  const userList = useSelector((state) => state.users);

  // Imported Func for sorting the leaderBoard based on their total Score
  /**
   * @params : (Object): state of users
   */
  const usersSorted = sortedUsers(userList);

  return (
    <section className={styles.leaderboard}>
      <h3>Leader Board</h3>
      {usersSorted.map((user) => (
        <div className={styles.container}>
          <img
            className={styles.userpic}
            src={userList[user].avatarURL}
            alt="user pic"
          />
          <div className={styles.textflex}>
            {" "}
            <strong>{userList[user].name}</strong>
            <div>
              Answered Questions: {Object.keys(userList[user].answers).length}
            </div>
            <div>Created questions: {userList[user].questions.length}</div>
          </div>
          <div className={styles.score}>
            Score
            <div className={styles.badge}>
              {Object.keys(userList[user].answers).length +
                userList[user].questions.length}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default LeaderBoard;
