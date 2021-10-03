import React from "react";
import styles from "../styles/LoginPage.module.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { activeUser } from "../store/authUser";

const LoginPage = () => {
  const [userName, setUserName] = React.useState("");

  // Importing dispatch from React-Redux
  const dispatch = useDispatch();
  // Handle Changing Selected User
  const handleChange = (event) => {
    const selectedUser = event.target.value;
    setUserName(selectedUser);
  };

  // Calling the userList from the Redux State.
  const usersList = useSelector((state) => state.users);

  // Handle Login
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(activeUser(userName));
  };

  return (
    <div className={styles.container}>
      <h4>
        Sign in to Would You Rather Game By Selecting One Of The Following Users
      </h4>
      <div>
        <Box sx={{ minWidth: 300 }}>
          <FormControl fullWidth variant="standard">
            <InputLabel id="userName-Label">User Name</InputLabel>
            <Select
              labelId="userName-Label"
              id="userName-Label"
              value={userName}
              label="userName"
              onChange={handleChange}
            >
              {Object.keys(usersList).map((user) => (
                <MenuItem value={user} key={user}>
                  <img
                    className={styles.userpic}
                    src={usersList[user].avatarURL}
                    alt="User pic"
                  />
                  {usersList[user].name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <div className={styles.loginBtn}>
          <Stack direction="column" spacing={10}>
            <Button variant="contained" color="success" onClick={handleClick}>
              Login
            </Button>
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
