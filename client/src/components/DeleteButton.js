import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined"
import { deleteOneNote } from "../services/notes.js"
import { setReloadTrue } from "../store/reloadSlice.js"
import { useSelector, useDispatch } from "react-redux"

function DeleteButton({ idnote }) {
	const currentToken = useSelector((store) => store.token)
	const dispatch = useDispatch()
	return (
		<div className="">
			<button
				className="flex justify-center items-center mx-1 h-full cursor-pointer outline-none"
				type="button"
				onClick={async () => {
					await deleteOneNote(
						process.env.REACT_APP_NOTES_URL,
						idnote,
						currentToken
					)
					dispatch(setReloadTrue(true))
				}}
			>
				<DeleteOutlinedIcon
					fontSize="small"
					className="mx-2 pointer-events-none"
				/>
			</button>
		</div>
	)
}

export default DeleteButton
