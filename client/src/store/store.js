import { configureStore } from "@reduxjs/toolkit"
import tokenReducer from "./tokenSlice.js"
import reloadReducer from "./reloadSlice.js"

const store = configureStore({
	reducer: {
		token: tokenReducer,
		reload: reloadReducer,
	},
})

store.subscribe(() => {
	localStorage.setItem("token", store.getState().token)
})

export default store
