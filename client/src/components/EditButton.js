import EditOutlinedIcon from "@mui/icons-material/EditOutlined"
import { useNavigate } from "react-router-dom"

function EditButton({ idnote }) {
	const navigate = useNavigate()
	return (
		<div className="">
			<button
				className="flex justify-center items-center mx-1 h-full cursor-pointer outline-none"
				type="button"
				onClick={() => {
					navigate(`/NOTE/${idnote}`)
				}}
			>
				<EditOutlinedIcon
					fontSize="small"
					className="mx-2 pointer-events-none"
				/>
			</button>
		</div>
	)
}

export default EditButton
