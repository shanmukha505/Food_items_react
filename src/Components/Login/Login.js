import React, { useState, useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import style from './Login.module.css';
import logo from '../../Assets/Images/logo.png';
import { useHistory, Redirect } from 'react-router-dom';

const Login = props => {

	const [user, setUser] = useState('');
	const [pass, setPass] = useState('');
	const [check, setCheck] = useState(false);
	const anime = useRef();

	const ACCOUNT = {
		'shanmukha': '12345',
		'shyam': '55555'
	}
	console.log(props);
	useEffect(() => {

		if (localStorage.checkbox && localStorage.user !== "") {

			setUser(localStorage.username)
			setPass(localStorage.password)
			setCheck(true);
		}

	}, []);

	const loginSubmit = () => {

		if (check && user !== "") {
			localStorage.username = user
			localStorage.password = pass
			localStorage.checkbox = check
		}

		if (ACCOUNT[user] !== undefined && ACCOUNT[user] === pass) {
			props.setuser(user);
			history.push('/shopping');
		}
		else {
			alert('invalid login');
			anime.current.style.borderColor = 'red';
			return <Redirect to="/" />;
		}

	}
	let history = useHistory();

	return (
		<div className={style.Login}>
			<div className={style.Image}>
				<h1> Foodigo </h1>
				<img src={logo}
					alt="logo" />
			</div>
			<div className={style.Form}  >
				<form>
					<input
						type="text"
						name="user"
						placeholder="username"
						value={user}
						onChange={(e) => setUser(e.target.value)} />
					<input
						type="password"
						name="pass"
						ref={anime}
						placeholder="password"
						value={pass}
						onChange={(e) => setPass(e.target.value)} />
					<div className={style.Remember}>
						<input
							type="checkbox"
							checked={check}
							name="isRememberMe"
							onChange={(e) => setCheck(e.target.checked)} />
						<label>Remember Me</label>
					</div>
					<Button variant="outline-light" size="sm" onClick={loginSubmit}>Login</Button>
				</form>
			</div>
		</div>
	);
}

export default Login;