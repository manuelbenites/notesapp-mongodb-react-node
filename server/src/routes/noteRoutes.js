import { Router } from "express"
import {
	getAllNotes,
	getOneNote,
	createNewNote,
	updateOneNote,
	deleteOneNote,
} from "../controllers/noteController.js"
const router = Router()

router.get("/", getAllNotes)

router.get("/:noteId", getOneNote)

router.post("/", createNewNote)

router.patch("/:noteId", updateOneNote)

router.delete("/:noteId", deleteOneNote)

export default router
