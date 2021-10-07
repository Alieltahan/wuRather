import React, { useState } from "react";
import styles from "../styles/QuestionDetails.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

const QuestionDetails = (props) => {
  // Getting the Question ID via React Router
  const QuestionId = props.match.params.id;
  const dispatch = useDispatch();
  const history = useHistory();
  const activeUser = useSelector((state) => state.auth);
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
    // Guard Clause
    if (!option) return alert(`Please select an option`);
    dispatch({
      type: "api/answerQuestion",
      payload: {
        authedUser: activeUser.id,
        qid: QuestionId,
        answer: option,
      },
    });
    history.push(`/questions/${QuestionId}`);
  };

  // Question Votes Counts
  const optionOneVotes = askedQuestion.optionOne.votes.length;
  const optionTwoVotes = askedQuestion.optionTwo.votes.length;
  const totalVotesCount = optionOneVotes + optionTwoVotes;
  const optionOneVotePercentage = `percentage percentage${Math.trunc(
    (optionOneVotes / totalVotesCount) * 100
  )}`;
  const optionTwoVotesPercentage = `percentage percentage${Math.trunc(
    (optionTwoVotes / totalVotesCount) * 100
  )}`;

  // Rendering for Questions Not Answered By Active User.
  let renderingQ = (
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
      <form
        className={styles.form}
        onSubmit={handleSubmit}
        onChange={handleChange}
      >
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
        <div className={styles.btn__container}>
          <button
            className={`${styles.btn} ${styles.q__btn} ${styles.glow} `}
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );

  // Conditional Rendering for Questions Already Answered By Active User.
  const indexOfAnsweredQ = Object.keys(activeUser.answers).indexOf(QuestionId);
  if (indexOfAnsweredQ >= 0) {
    // Marking the answer for the active user
    const voteOption = Object.values(activeUser.answers)[indexOfAnsweredQ];

    return (renderingQ = (
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
        <table>
          <tbody>
            <tr>
              <td className={styles.questions__tableline}>
                {voteOption === "optionOne" ? (
                  <span className={styles.yourVote}>Your Vote</span>
                ) : (
                  ""
                )}
                1- {askedQuestion.optionOne.text}{" "}
                <dd className={optionOneVotePercentage}></dd>
              </td>
            </tr>
            <tr>
              <td className={styles.questions__tableline}>
                {voteOption === "optionTwo" ? (
                  <span className={styles.yourVote}>Your Vote</span>
                ) : (
                  ""
                )}
                2- {askedQuestion.optionTwo.text}{" "}
                <dd className={optionTwoVotesPercentage}></dd>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    ));
  }

  return <div>{renderingQ}</div>;
};

export default QuestionDetails;
