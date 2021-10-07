import bg from "../img/ripped.jpg";
import styles from "../styles/NotFound.module.css";
import { useHistory } from "react-router";
const NotFound = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/");
  };
  return (
    <div className={styles.container}>
      <h4> 404 Error </h4>
      <h3>Sorry, we can’t seem to find what you’re looking for.</h3>
      <button onClick={handleClick} className={styles.glow}>
        Return to Home Page..
      </button>
      <img
        src={bg}
        className={`background ${styles.background}`}
        alt="page not found"
      />
    </div>
  );
};

export default NotFound;
