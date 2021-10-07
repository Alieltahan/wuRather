import React from "react";
import { useSelector } from "react-redux";
import styles from "../styles/Leaderboard.module.css";

const LeaderBoard = () => {
  const userList = useSelector((state) => state.users);
  // Storing users as key and total score as property
  let usersObj = {};
  const usersScore = Object.keys(userList).map((user) => {
    const userId = user;
    const userScore =
      Object.keys(userList[user].answers).length +
      userList[user].questions.length;
    return (usersObj[userId] = userScore);
  });
  // Sorting the score in an Array
  const sorting = Object.keys(usersScore).sort((a, b) => {
    return usersScore[b] - usersScore[a];
  });
  // Storing the users' ID in an array
  const usersKeys = Object.keys(usersObj);
  // using the sorted score's index to sort the user Ids
  const usersSorted = sorting.map((i) => usersKeys[i]);

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
