import EditButton from "../components/EditButton.js"
import DeleteButton from "../components/DeleteButton.js"
import useAxiosData from "../hooks/useAxiosData.js"

function RenderNotes() {
	const { notes } = useAxiosData(process.env.REACT_APP_NOTES_URL, "getallnotes")
	return (
		<div className="inline-flex justify-center w-full">
			<div className="w-full sm:w-min sm:columns-2 md:columns-3 lg:columns-4">
				{notes &&
					notes.map((note) => {
						return (
							<div
								className={
									"mb-3 w-full min-h-[116px] text-slate-50 sm:w-56 break-inside-avoid shadow-black hover:shadow-md rounded-md " +
									note.theme
								}
								key={note._id}
								data-id={note._id}
							>
								<div className="min-h-[40px] px-3 pt-3 pb-1 break-all w-full sm:w-56">
									{note.title}
								</div>
								<div className="min-h-[40px] px-3 pt-1 pb-3 break-all w-full sm:w-56 text-justify">
									{note.content}
								</div>
								<div className="flex justify-start pt-1 pb-3 opacity-0 hover:opacity-100">
									<EditButton idnote={note._id} />
									<DeleteButton idnote={note._id} />
								</div>
							</div>
						)
					})}
			</div>
		</div>
	)
}

export default RenderNotes
