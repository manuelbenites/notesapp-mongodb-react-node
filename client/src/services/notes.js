import axios from "axios"

export const getAllNotes = async (url, authorization) => {
	try {
		const response = await axios.get(url, {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${authorization}`,
			},
		})
		return response.data
	} catch (error) {
		console.log(error.message)
	}
}

export const createNote = async (url, note, authorization) => {
	try {
		await axios.post(url, note, {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${authorization}`,
			},
		})
	} catch (error) {
		console.log(error)
	}
}

export const getOneNote = async (url, idNote, authorization) => {
	try {
		const response = await axios.get(`${url}/${idNote}`, {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${authorization}`,
			},
		})
		return response.data
	} catch (error) {
		console.log(error.message)
	}
}

export const deleteOneNote = async (url, idNote, authorization) => {
	await axios.delete(url + "/" + `${idNote}`, {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${authorization}`,
		},
		data: {
			idNote: idNote,
		},
	})
}

export const updateOneNote = async (url, idNote, note, authorization) => {
	await axios.patch(url + "/" + `${idNote}`, note, {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${authorization}`,
		},
	})
}
