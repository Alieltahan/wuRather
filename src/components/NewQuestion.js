import React, { useState } from "react";
import styles from "../styles/NewQuestion.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

const NewQuestion = () => {
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");

  const dispatch = useDispatch();
  const handleOption1 = (e) => {
    const value = e.target.value;
    setOptionOne(value);
  };
  const activeUser = useSelector((state) => state.auth.id);
  const history = useHistory();
  const handleOption2 = (e) => {
    const value = e.target.value;
    setOptionTwo(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: "api/addQuestion",
      payLoad: {
        author: activeUser,
        optionOneText: optionOne,
        optionTwoText: optionTwo,
      },
    });
    history.push("/");
  };

  return (
    <div className={styles.container__center}>
      <form
        className={`${styles.form} ${styles.goBottom} ${styles.form__container}`}
        onSubmit={handleSubmit}
      >
        <h2>Create a New Question </h2>
        <p>Would you rather... </p>
        <div className={styles.input__container}>
          <input
            className={styles.input}
            type="text"
            onChange={handleOption1}
            value={optionOne}
            id="optionOne"
            required
            autoComplete="off"
          />
          <label htmlFor="optionOne">Option One</label>
        </div>
        <div className={styles.input__container}>
          <input
            type="text"
            onChange={handleOption2}
            value={optionTwo}
            id="optionTwo"
            autoComplete="off"
            required
          />
          <label htmlFor="optionTwo">Option Two</label>
        </div>
        <button className={styles.glow} type="submit" value="Submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewQuestion;
