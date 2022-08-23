import { Link } from "react-router-dom"

function NotFound() {
	return (
		<div className="flex justify-center items-center flex-col h-screen px-5">
			<div className="font-bold text-9xl text-slate-100">Oops!</div>
			<div className="font-bold text-2xl text-slate-100 mb-5">
				404 - Page Not Found
			</div>
			<div className="mb-5 text-justify text-slate-100">
				The page you are looking for might have been removed had its name
				changed or is temporarily unavailable.
			</div>
			<Link
				to="/"
				className="outline-none px-8 py-3 bg-slate-200 text-slate-900 font-bold rounded-md"
			>
				HomePage
			</Link>
		</div>
	)
}

export default NotFound
