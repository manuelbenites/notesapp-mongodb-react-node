import User, { encryptPassword, comparePassword } from "../models/User.js"
import jwt from "jsonwebtoken"

export const signUp = async (req, res) => {
	const { username, firstname, lastname, email, password } = req.body
	const newUser = new User({
		username,
		firstname,
		lastname,
		email,
		password: encryptPassword(password),
	})
	await newUser.save()
	res.json("SignUp")
}

export const signIn = async (req, res) => {
	const { username, password } = req.body

	const user = await User.findOne({ username })

	if (user === null) {
		return res.status(401).json({
			error: "Invalid user",
		})
	}

	const itMatches = comparePassword(password, user.password)

	if (!itMatches) {
		return res.status(401).json({
			error: "Invalid password",
		})
	}

	const userForToken = {
		id: user._id.toJSON(),
		username: user.username,
	}

	const token = jwt.sign(userForToken, "manubs95")

	return res.json({
		firstname: user.firstname,
		username: user.username,
		token,
	})
}
