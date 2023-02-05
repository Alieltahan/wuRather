import React from 'react';
import styles from '../styles/LoginPage.module.css';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { activeUser, login } from '../store/authUser';
import { useHistory } from 'react-router';

const LoginPage = (props) => {
	const [userName, setUserName] = React.useState('');
	const { from } = props.location.state || { from: { pathname: '/' } };

	// Importing dispatch from React-Redux
	const dispatch = useDispatch();

	// Handle Changing Selected User
	const handleChange = (event) => {
		const selectedUser = event.target.value;
		setUserName(selectedUser);
	};

	// Calling the userList from the Redux State.
	const usersList = useSelector((state) => state.users);

	// Getting useHistory Hook from Router
	const history = useHistory();

	// Handle Login
	const handleLogin = (e) => {
		e.preventDefault();
		// Guard clause
		if (userName === '') return alert('Please select a User');
		dispatch(login());
		dispatch(activeUser({ ...usersList[userName] }));
		history.push(from);
	};

	return (
		<div className={styles.container}>
			<h4>
				Sign in to Would You Rather Game By Selecting One Of The
				Following Users
			</h4>
			<div>
				<Box sx={{ minWidth: 300, display: 'flex' }}>
					<FormControl
						fullWidth
						variant='standard'
					>
						<InputLabel id='userName-Label'>User Name</InputLabel>
						<Select
							className='centeredSelect'
							labelId='userName-Label'
							id='userName-Label'
							value={userName}
							label='userName'
							onChange={handleChange}
						>
							{Object.keys(usersList).map((user) => (
								<MenuItem
									value={user}
									key={user}
								>
									<img
										className={styles.userpic}
										src={usersList[user].avatarURL}
										alt='User pic'
									/>
									<span>{usersList[user].name}</span>
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</Box>
				<div className={styles.loginBtn}>
					<Stack
						direction='column'
						spacing={10}
					>
						<Button
							variant='contained'
							color='success'
							onClick={handleLogin}
						>
							Login
						</Button>
					</Stack>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
