import React from "react";
import logoutIcon from "../img/icons/logout.svg";
import styles from "../styles/NavBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router";

const NavBar = () => {
  const userActive = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleLogout = () => {
    dispatch({ type: "logout" });
    history.push("/login");
  };

  return (
    <div className={styles.container}>
      <nav>
        <NavLink className={styles.navitem} exact to="/">
          Dashboard
        </NavLink>
        <NavLink className={styles.navitem} to="add">
          New Question
        </NavLink>
        <NavLink className={styles.navitem} to="/leaderboard">
          Leader Board
        </NavLink>
        {userActive.avatarURL && (
          <>
            {" "}
            <img
              className={styles.userpic}
              src={userActive.avatarURL}
              alt="user pic"
            />
            {userActive.name}
            <img
              src={logoutIcon}
              onClick={handleLogout}
              className={styles.logout}
              alt="logout button"
            />
          </>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
