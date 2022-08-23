import { Link } from "react-router-dom"

function Home() {
	return (
		<div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
			<div className="text-5xl text-slate-50 text-center font-bold mb-10">
				Real Notes
			</div>
			<div className="text-center">
				<Link to="/signin">
					<div className="bg-[#3369FF] w-[15rem] h-10 text-[#171C26] text-xl leading-10 rounded-md m-3">
						Sign In
					</div>
				</Link>
				<Link to="/signup">
					<div className="bg-[#171C26] w-[15rem] h-10 text-slate-50 text-xl leading-10 rounded-md m-3">
						Sign Up
					</div>
				</Link>
			</div>
		</div>
	)
}

export default Home
