import React, { useState, useContext } from "react"
import axios from "axios"
import { API_URL } from "../constants.js";
import { AuthContext } from "../context/auth.context.js";
import { useNavigate } from "react-router-dom";
import { logIn } from '../auth.service'


const Signin = () => {
    const { logInUser } = useContext(AuthContext);
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const handleUsername = (e) => setUsername(e.target.value)
	const handlePassword = (e) => setPassword(e.target.value)
	const navigate=useNavigate();
	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			//const { data } = await axios.post(`${API_URL}/api/auth/login`, {
			//	username,
			//	password,
			//})
			const {data } = await logIn({ username, password});
			localStorage.setItem("authToken", data)
			navigate('/auth/user'); 
		} catch (error) {}
	}
	return (
		<form onSubmit={handleSubmit} className="Back">
			<div >
				<label htmlFor="username">Username: </label>
				<input
					type="text"
					name="username"
					id="username"
					value={username}
					onChange={handleUsername}
				/>
			</div>
			<div>
				<label htmlFor="password">Password: </label>
				<input
					type="password"
					name="password"
					id="password"
					value={password}
					onChange={handlePassword}
				/>
			</div>
            <h2>Hello!</h2>
            <h3>Awsome to have you at IronProfile again</h3>
            <p>If you signup, you agree with all the terms and conditions</p>
			<button>Log In</button>
		</form>
	)
}

export default Signin