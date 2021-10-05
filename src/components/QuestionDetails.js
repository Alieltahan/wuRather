import React, { useState } from "react";
import styles from "../styles/QuestionDetails.module.css";
import { useDispatch, useSelector } from "react-redux";
import { answerQuestion } from "../store/authUser";
import { useHistory } from "react-router";

const QuestionDetails = (props) => {
  const dispatch = useDispatch();
  const QuestionId = props.match.params.id;
  const history = useHistory();
  // const activeUser = useSelector((state) => state.auth);
  const questions = useSelector((state) => state.questions);
  const usersList = useSelector((state) => state.users);
  const askingUser = usersList[questions[QuestionId].author];
  const askedQuestion = questions[QuestionId];
  const [option, setOption] = useState();

  const handleChange = (e) => {
    const selectedAnswer = e.target.value;
    setOption(selectedAnswer);
  };
  // Handle Answer
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(answerQuestion([QuestionId, option]));
    history.push("/dashboard");
  };
  return (
    <div>
      <div className={styles.container}>
        <img
          className={styles.q__userpic}
          src={askingUser.avatarURL}
          alt="user pic"
        />
        <div className={styles.q__details__header}>
          <strong>
            <i>{askingUser.name}</i>
          </strong>{" "}
          asks would you rather...
        </div>
        <form onSubmit={handleSubmit} onChange={handleChange}>
          <label>
            <input
              type="radio"
              className={`${styles.optioninput} ${styles.radio}`}
              name="example"
              value="optionOne"
            />
            {askedQuestion.optionOne.text}
          </label>
          <label>
            <input
              type="radio"
              className={`${styles.optioninput} ${styles.radio}`}
              name="example"
              value="optionTwo"
            />
            {askedQuestion.optionTwo.text}
          </label>
          <button className={`${styles.btn} ${styles.q__btn} `} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuestionDetails;
