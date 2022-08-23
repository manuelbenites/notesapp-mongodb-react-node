const themes = [
	{
		value: "bg-[#171C26]",
		background: "bg-[#171C26]",
	},
	{
		value: "bg-[#5C2B29]",
		background: "bg-[#5C2B29]",
	},
	{
		value: "bg-[#614A19]",
		background: "bg-[#614A19]",
	},
	{
		value: "bg-[#635D19]",
		background: "bg-[#635D19]",
	},
	{
		value: "bg-[#16504B]",
		background: "bg-[#16504B]",
	},
	{
		value: "bg-[#2D555E]",
		background: "bg-[#2D555E]",
	},
	{
		value: "bg-[#3369FF]",
		background: "bg-[#3369FF]",
	},
	{
		value: "bg-[#42275E]",
		background: "bg-[#42275E]",
	},
	{
		value: "bg-[#442F19]",
		background: "bg-[#442F19]",
	},
	{
		value: "bg-[#3C3F43]",
		background: "bg-[#3C3F43]",
	},
]
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined"
import useDisplay from "../hooks/useDisplay.js"

function ColorsPalette({ color }) {
	const { display, handleToggleBlock } = useDisplay()
	return (
		<>
			<div>
				<div
					className="flex justify-center text-slate-300 hover:text-slate-50 items-center mx-1 h-full cursor-pointer outline-none"
					onClick={handleToggleBlock}
				>
					<PaletteOutlinedIcon
						fontSize="small"
						className="mx-2 pointer-events-none"
					/>
				</div>
			</div>
			<div
				className={
					display +
					" w-[214px] p-1 absolute bg-[#171C26] shadow-md shadow-slate-900 rounded-lg left-1/2 translate-x-[-50%] translate-y-[40px] z-10 "
				}
			>
				{themes.map((element) => (
					<div className="inline-block m-1 h-6" key={element.value}>
						<input
							type="radio"
							id={element.value}
							name="theme"
							onChange={color}
							value={element.value}
							className={
								"w-8 h-8 text-black appearance-none cursor-pointer " +
								element.background +
								" hover:border-black hover:border-2 outline-none rounded-full"
							}
						/>
					</div>
				))}
			</div>
		</>
	)
}

export default ColorsPalette
