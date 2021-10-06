import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "../styles/RenderQ.module.css";

const RenderQ = ({ questArray }) => {
  const questions = useSelector((state) => state.questions);
  const users = useSelector((state) => state.users);

  return (
    <div>
      <div className={styles.container}>
        {questArray.map((q) => (
          <div key={q} className={styles.question}>
            <img
              src={users[questions[q].author].avatarURL}
              alt="User Pic"
              className={styles.questions__userpic}
            />
            <div>
              {" "}
              <strong>
                <i>{users[questions[q].author].name} </i>{" "}
              </strong>
              asks Would you rather...
              <table>
                <tbody>
                  <tr>
                    <td className={styles.questions__tableline}>
                      {" "}
                      1- {questions[q].optionOne.text}{" "}
                    </td>
                  </tr>
                  <tr>
                    <td className={styles.questions__tableline}>
                      {" "}
                      2- {questions[q].optionTwo.text}{" "}
                    </td>
                  </tr>
                </tbody>
              </table>
              <Link to={`/questions/${questions[q].id}`}>
                <button className={styles.glow} type="button">
                  View Question
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RenderQ;
