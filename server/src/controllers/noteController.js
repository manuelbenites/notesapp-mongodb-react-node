import Note from "../models/Note.js"
import jwt from "jsonwebtoken"

export const getAllNotes = async (req, res) => {
	const authorization = req.get("authorization")

	let token = ""

	if (authorization && authorization.toLowerCase().startsWith("bearer")) {
		token = authorization.substring(7)
	}

	let decodedToken = {}

	try {
		decodedToken = jwt.verify(token, process.env.SECRET_WORD)
	} catch (error) {
		console.log(error)
	}

	if (!token || !decodedToken.id) {
		return res.status(401).json({ error: "token missing or invalid" })
	}

	const notes = await Note.find({ userId: decodedToken.id })
	res.send(notes)
}

export const getOneNote = async (req, res) => {
	const {
		params: { noteId },
	} = req
	const response = await Note.findOne({ _id: noteId })
	res.send(response)
}

export const createNewNote = async (req, res) => {
	const { title, content, theme } = req.body
	const authorization = req.get("authorization")

	let token = ""

	if (authorization && authorization.toLowerCase().startsWith("bearer")) {
		token = authorization.substring(7)
	}

	let decodedToken = {}

	try {
		decodedToken = jwt.verify(token, process.env.SECRET_WORD)
	} catch (error) {
		console.log(error)
	}

	console.log(decodedToken.id)

	if (!token || !decodedToken.id) {
		return res.status(401).json({ error: "token missing or invalid" })
	}

	const newNote = new Note({ title, content, theme, userId: decodedToken.id })
	await newNote.save()
	res.send("Create a new note")
}

export const updateOneNote = async (req, res) => {
	const {
		params: { noteId },
	} = req
	const { title, content, theme } = req.body
	await Note.findOneAndUpdate({ _id: noteId }, { title, content, theme })
	res.send("Update an existing note")
}

export const deleteOneNote = async (req, res) => {
	const { idNote } = req.body
	await Note.findByIdAndDelete({ _id: idNote })
	res.send("Delete an existing note")
}
