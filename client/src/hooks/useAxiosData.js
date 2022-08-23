import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { getAllNotes, getOneNote } from "../services/notes.js"
import { setReloadFalse } from "../store/reloadSlice.js"

const useAxiosData = (url, action) => {
	const [notes, setNotes] = useState(null)
	const currentNoteId = useParams()
	const currentToken = useSelector((store) => store.token)
	const currentReloadState = useSelector((store) => store.reload)
	const dispatch = useDispatch()

	useEffect(() => {
		if (action === "getallnotes") {
			getAllNotes(url, currentToken).then((data) => setNotes(data))
			dispatch(setReloadFalse(false))
		}
		if (action === "getonenote") {
			getOneNote(url, currentNoteId.id, currentToken).then((data) => data)
		}
	}, [currentReloadState])

	return { notes }
}

export default useAxiosData
