import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/NavItem.module.css";
import { useDispatch } from "react-redux";

const NavItem = ({ linkTo, title, imgUrl, icon }) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch({ type: "logout" });
  };

  return (
    <>
      <div className={styles.container}>
        {imgUrl && (
          <img src={imgUrl} className={styles.userpic} alt="user pic" />
        )}
        <NavLink to={linkTo}>{title}</NavLink>
      </div>
      {icon && (
        <div className={styles.logout}>
          <NavLink to={linkTo}>
            <img
              src={icon}
              onClick={handleLogout}
              className={styles.icon}
              alt="user pic"
            />
          </NavLink>
        </div>
      )}
    </>
  );
};

export default NavItem;
