import axios from "axios"

export const loginUser = async (url, user) => {
	const response = await axios.post(url, user, {
		headers: {
			"Content-Type": "application/json",
		},
	})
	return response
}
