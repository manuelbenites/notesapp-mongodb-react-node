import { useNavigate, useParams } from "react-router-dom"
import { getOneNote, updateOneNote } from "../services/notes.js"
import { useSelector } from "react-redux"
import { useState, useEffect } from "react"
import ColorsPalette from "../components/ColorsPalette.js"

function EditNote() {
	const navigate = useNavigate()
	const currentNoteId = useParams()
	const authorization = useSelector((store) => store.token)
	const [note, setNote] = useState({
		title: "",
		content: "",
		theme: "",
	})
	useEffect(() => {
		getOneNote(
			process.env.REACT_APP_NOTES_URL,
			currentNoteId.id,
			authorization
		).then((data) =>
			setNote({
				title: data.title,
				content: data.content,
				theme: data.theme,
			})
		)
	}, [])

	const handleChangeInput = (e) => {
		setNote({
			...note,
			[e.target.name]: e.target.value,
		})
	}

	return (
		<div
			id="editform"
			className={"left-0 top-0 w-full h-full bg-black bg-opacity-50"}
		>
			<form
				onSubmit={(e) => {
					e.preventDefault()
					updateOneNote(
						process.env.REACT_APP_NOTES_URL,
						currentNoteId.id,
						note,
						authorization
					)
					navigate("/notes")
				}}
				className={
					note.theme +
					" fixed w-full sm:w-96 min-h-[140px] rounded-md top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
				}
			>
				<div className="py-3 px-4">
					<input
						name="title"
						defaultValue={note.title}
						className="w-full text-slate-200 placeholder-slate-300 outline-none bg-inherit"
						onChange={handleChangeInput}
					/>
				</div>
				<div className="py-3 px-4">
					<input
						name="content"
						defaultValue={note.content}
						className="w-full text-slate-200 placeholder-slate-300 outline-none bg-inherit"
						onChange={handleChangeInput}
					/>
				</div>
				<div className="flex justify-between py-1">
					<ColorsPalette color={handleChangeInput} />
					<button className="py-2 px-5 mr-4 outline-none rounded-md text-slate-300 hover:text-slate-50">
						Send
					</button>
				</div>
			</form>
		</div>
	)
}
export default EditNote
