import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { createNote } from "../services/notes.js"
import { setReloadTrue } from "../store/reloadSlice.js"

import ColorsPalette from "./ColorsPalette.js"

function CreateNoteForm() {
	const [note, setNote] = useState({
		title: "",
		content: "",
		theme: "bg-[#171C26]",
	})

	const currentToken = useSelector((store) => store.token)
	const dispatch = useDispatch()

	const handleChangeInput = (e) => {
		setNote({
			...note,
			[e.target.name]: e.target.value,
		})
	}

	const handleSubmitNote = (e) => {
		e.preventDefault()
		createNote(process.env.REACT_APP_NOTES_URL, note, currentToken)
		setNote({
			title: "",
			content: "",
			theme: "bg-[#171C26]",
		})
		dispatch(setReloadTrue(true))
	}

	return (
		<div className="pt-24">
			<form
				className={"max-w-md mx-auto rounded-lg shadow-md mb-8 " + note.theme}
				onSubmit={handleSubmitNote}
			>
				<div className="py-3 px-4">
					<input
						name="title"
						placeholder="Titulo"
						autoComplete="off"
						className="w-full text-slate-200 placeholder-slate-300 outline-none bg-inherit"
						onChange={handleChangeInput}
					/>
				</div>
				<div className="py-3 px-4">
					<textarea
						name="content"
						placeholder="Crear una nota..."
						autoComplete="off"
						className="w-full h-auto text-slate-200 placeholder-slate-300 outline-none bg-inherit resize-none"
						onChange={handleChangeInput}
						onInput={(e) =>
							(e.target.style.height = e.target.scrollHeight + "px")
						}
					/>
				</div>
				<div className="flex justify-between py-1">
					<ColorsPalette color={handleChangeInput} />
					<button className="py-2 px-5 mr-4 outline-none rounded-md text-slate-300 hover:text-slate-50">
						Enviar
					</button>
				</div>
			</form>
		</div>
	)
}

export default CreateNoteForm
