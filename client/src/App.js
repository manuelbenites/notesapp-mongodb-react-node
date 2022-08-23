import { Routes, Route } from "react-router-dom"
import PrivateRoute from "./components/PrivateRoute"

import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import Notes from "./pages/Notes"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound.js"
import EditNote from "./pages/EditNote.js"

function App() {
	return (
		<div className="w-full min-h-screen bg-[#0E121B] px-5">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/signin" element={<SignIn />} />
				<Route path="/signup" element={<SignUp />} />
				<Route
					path="/notes"
					element={
						<PrivateRoute>
							<Notes />
						</PrivateRoute>
					}
				/>
				<Route path="/NOTE/:id" element={<EditNote />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	)
}

export default App
