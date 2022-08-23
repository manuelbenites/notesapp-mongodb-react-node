import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setToken } from "../store/tokenSlice.js"
import Header from "../components/Header.js"
import axios from "axios"

function SignIn() {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const [user, setUser] = useState({
		username: "",
		password: "",
	})

	const handleChange = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		})
	}

	const loginUser = async (url, data) => {
		const response = await axios.post(url, data, {
			headers: {
				"Content-Type": "application/json",
			},
		})
		localStorage.setItem("token", response.data.token)
		dispatch(setToken(response.data.token))
	}

	const handleSubmitSignIn = async (e) => {
		e.preventDefault()
		try {
			await loginUser(process.env.REACT_APP_SIGN_IN_URL, user)
		} catch (error) {
			console.log("Usuario o contrasena incorrecta")
		}
		navigate("/notes")
	}

	return (
		<>
			<Header />
			<div className="max-w-md w-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] py-5 shadow-lg rounded-2xl">
				<div className="flex justify-center items-center h-20 bg-green-600 rounded-t-2xl">
					<span className="text-2xl font-bold text-white">Sign In</span>
				</div>
				<form className="px-7 mt-14" onSubmit={handleSubmitSignIn}>
					<div className="mt-5">
						<input
							name="username"
							type="text"
							placeholder="Username"
							className="py-3 px-6 w-full text-sm bg-gray-200 rounded-2xl outline-none placeholder:font-bold placeholder:text-black"
							onChange={handleChange}
						/>
					</div>
					<div className="mt-5">
						<input
							name="password"
							type="password"
							placeholder="Password"
							className="py-3 px-6 w-full text-sm bg-gray-200 rounded-2xl outline-none placeholder:font-bold placeholder:text-black"
							onChange={handleChange}
						/>
					</div>
					<div className="mt-14 text-sm text-white">
						<button className="py-3 w-full font-bold uppercase bg-green-600 rounded-2xl transition-all hover:bg-green-900">
							Sign In
						</button>
					</div>
				</form>
				<div className="flex justify-center items-end h-24">
					<div className="text-center">
						<span className="text-sm text-gray-500">
							Don’t have an account?
						</span>
						<div>
							<Link
								className="font-bold text-green-500 uppercase transition-all hover:text-green-900"
								to="/signup"
							>
								Sign Up
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default SignIn
