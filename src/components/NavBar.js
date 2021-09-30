import React from "react";
import NavItem from "./NavItem";

import styles from "../styles/NavBar.module.css";

const NavBar = () => {
  // const [value, setValue] = useState("one");

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  return (
    <div className={styles.container}>
      <NavItem linkTo="/Dashboard" title="Dashboard" />
      <NavItem linkTo="/NewQuestion" title="New Question" />
      <NavItem linkTo="/LeaderBoard" title="LeaderBoard" />
      <NavItem linkTo="/UserName" title="UserName" />
      <NavItem linkTo="/" title="LogoutButton" />
    </div>
  );
};

export default NavBar;
