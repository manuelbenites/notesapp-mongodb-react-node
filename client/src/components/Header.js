import { NavLink } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { setToken } from "../store/tokenSlice"

function Header() {
	const dispatch = useDispatch()
	const currentToken = useSelector((store) => store.token)

	const logOut = () => {
		dispatch(setToken(""))
	}

	return (
		<div className="fixed left-0 top-0 w-full h-16 bg-[#0E121B]">
			<div className="inline-flex flex-row justify-between items-center px-3 w-full h-full text-slate-50 text-lg font-bold sm:px-8 md:px-14">
				<div className="">
					<NavLink to="/">Home</NavLink>
				</div>
				{!currentToken ? null : (
					<div className="inline-flex flex-row">
						<div className="ml-7">
							<NavLink to="/notes">Notes</NavLink>
						</div>
						<div className="ml-7">
							<button className="outline-none" onClick={logOut}>
								Logout
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default Header
