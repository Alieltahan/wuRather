import styles from "../styles/question.module.css";

const UnAnsweredQuestions = () => {
  return (
    <>
      <>
        <img
          src="https://i.pravatar.cc/100"
          alt="User Pic"
          className={styles.questions__userpic}
        />
      </>
      USER asks Would you rather
      <div className={styles.container}>
        <table>
          <tr>
            <td className={styles.questions__tableline}> option 1</td>
          </tr>

          <tr>
            <td> option 2</td>
          </tr>
        </table>
        <button className={styles.glow} type="button">
          View Question
        </button>
      </div>
    </>
  );
};

export default UnAnsweredQuestions;
