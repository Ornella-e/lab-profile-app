import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "../constants.js";
import { useNavigate } from "react-router-dom";
import { signUp } from '../auth.service'

const Signup = () => {
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
    const [campus, setCampus] = useState("")
    const [course, setCourse] = useState("")
	const handleUsername = (e) => setUsername(e.target.value)
	const handlePassword = (e) => setPassword(e.target.value)
    const handleCampus = (e) => setCampus(e.target.value)
    const handleCourse = (e) => setCourse(e.target.value)
	const navigate=useNavigate();
	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			// const { data } = await axios.post(`${API_URL}/api/auth/signup`, {
			// 	username,
			// 	password,
            //     campus,
            //     course,
			// })
			const {data } = await signUp({ username, password, campus, course});
			navigate("/auth/login");
		} catch (error) {}
	}
	return (
        <>
		<div className="Back">
        <h1> Sign up </h1>
		<form onSubmit={handleSubmit}>
			<div>
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
            <div>
				<label htmlFor="campus">Campus: </label>
				<input
					type="campus"
					name="campus"
					id="campus"
					value={campus}
					onChange={handleCampus}
				/>
			</div>
            <div>
				<label htmlFor="course">Course: </label>
				<input
					type="course"
					name="course"
					id="course"
					value={course}
					onChange={handleCourse}
				/>
			</div>
            <h2>Hello!</h2>
            <h3>Welcome to IronProfile</h3>
            <p>If you signup, you agree with all the terms and conditions</p>
			<button>Create the Account</button>
		</form>
		</div>
        </>
	)
}

export default Signup