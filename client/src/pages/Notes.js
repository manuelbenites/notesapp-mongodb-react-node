import RenderNotes from "../components/RenderNotes.js"
import Header from "../components/Header.js"
import CreateNoteForm from "../components/CreateNoteForm.js"

function Notes() {
	return (
		<div className="h-full">
			<Header />
			<CreateNoteForm />
			<RenderNotes />
		</div>
	)
}

export default Notes
