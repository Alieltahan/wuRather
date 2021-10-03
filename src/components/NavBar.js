import React from "react";
import NavItem from "./NavItem";

import styles from "../styles/NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <NavItem linkTo="/Dashboard" title="Dashboard" />
      <NavItem linkTo="/add" title="New Question" />
      <NavItem linkTo="/LeaderBoard" title="LeaderBoard" />

      <NavItem linkTo="/Login" title="Login" />
      <NavItem linkTo="/" title="LogoutButton" />
    </div>
  );
};

export default NavBar;
