import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/NavItem.module.css";

const NavItem = ({ linkTo, title }) => {
  return (
    <div className={styles.container}>
      <NavLink to={linkTo}> {title} </NavLink>
    </div>
  );
};

export default NavItem;
