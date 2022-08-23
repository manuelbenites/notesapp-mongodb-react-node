import axios from "axios"

export const createUser = async (url, user) => {
	try {
		await axios.post(url, user, {
			headers: {
				"Content-Type": "application/json",
			},
		})
	} catch (error) {
		console.log(error.message)
	}
}
