import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

function PrivateRoute({ children }) {
	const currentToken = useSelector((store) => store.token)

	if (!currentToken) {
		return <Navigate to="/signin" replace="true" />
	}

	return children
}

export default PrivateRoute
