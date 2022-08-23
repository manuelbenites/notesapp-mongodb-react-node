import { Link } from "react-router-dom"
import { useState } from "react"
import { createUser } from "../services/users.js"
import Header from "../components/Header.js"

function SignUp() {
	const [user, setUser] = useState({
		username: "",
		firstname: "",
		lastname: "",
		email: "",
		password: "",
	})

	const handleChange = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		})
	}

	const handleSubmitNewUser = async (e) => {
		e.preventDefault()
		await createUser(process.env.REACT_APP_SIGN_UP_URL, user)
		e.target.reset()
	}

	return (
		<>
			<Header />
			<div className="max-w-md absolute top-[52%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full shadow-lg rounded-2xl pb-4">
				<div className="rounded-t-2xl bg-green-600 py-6 text-center">
					<span className="font-bold text-2xl text-white">Sign Up</span>
				</div>
				<form onSubmit={handleSubmitNewUser} className="px-10 mt-10">
					<div className="mt-5">
						<input
							name="username"
							type="text"
							placeholder="Username"
							className="w-full text-sm py-3 px-6 outline-none rounded-2xl bg-gray-200 placeholder:font-bold placeholder:text-black"
							onChange={handleChange}
						/>
					</div>
					<div className="mt-5">
						<input
							name="firstname"
							type="text"
							placeholder="First name"
							className="w-full text-sm py-3 px-6 outline-none rounded-2xl bg-gray-200 placeholder:font-bold placeholder:text-black"
							onChange={handleChange}
						/>
					</div>
					<div className="mt-5">
						<input
							name="lastname"
							type="text"
							placeholder="Last name"
							className="w-full text-sm py-3 px-6 outline-none rounded-2xl bg-gray-200 placeholder:font-bold placeholder:text-black"
							onChange={handleChange}
						/>
					</div>
					<div className="mt-5">
						<input
							name="email"
							type="email"
							placeholder="Email"
							className="w-full text-sm py-3 px-6 outline-none rounded-2xl bg-gray-200 placeholder:font-bold placeholder:text-black"
							onChange={handleChange}
						/>
					</div>
					<div className="mt-5">
						<input
							name="password"
							type="password"
							placeholder="Password"
							className="w-full text-sm py-3 px-6 outline-none rounded-2xl bg-gray-200 placeholder:font-bold placeholder:text-black"
							onChange={handleChange}
						/>
					</div>
					<div className="mt-10 text-white text-sm">
						<button className="w-full py-3 uppercase bg-green-600 font-bold rounded-2xl transition-all hover:bg-green-900">
							Sign Up
						</button>
					</div>
				</form>
				<div className="h-16 flex items-end justify-center">
					<div className="text-center">
						<span className="text-sm text-gray-500">
							Already have an account?
						</span>
						<div>
							<Link
								className="text-green-500 font-bold uppercase transition-all hover:text-green-900"
								to="/signin"
							>
								Sign In
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default SignUp
