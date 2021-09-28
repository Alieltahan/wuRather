import React from "react";
import styles from "../styles/LoginPage.module.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const LoginPage = () => {
  const [userName, setUserName] = React.useState("");

  const handleChange = (event) => {
    setUserName(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className={styles.container}>
      <h3>
        Sign in to Would You Rather Game By Selecting One Of The Following Users
      </h3>
      <div>
        <Box sx={{ minWidth: 320 }}>
          <FormControl fullWidth>
            <InputLabel id="userName-Label">User Name</InputLabel>
            <Select
              labelId="userName-Label"
              id="userName-Label"
              value={userName}
              label="userName"
              onChange={handleChange}
            >
              <MenuItem value={""}>NONE</MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <div className={styles.loginBtn}>
          <Stack direction="column" spacing={10}>
            <Button variant="contained" color="success">
              Login
            </Button>
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
