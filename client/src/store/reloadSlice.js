import { createSlice } from "@reduxjs/toolkit"

const reloadSlice = createSlice({
	name: "reload",
	initialState: false,
	reducers: {
		setReloadFalse: (state, action) => action.payload,
		setReloadTrue: (state, action) => action.payload,
	},
})

export const { setReloadFalse, setReloadTrue } = reloadSlice.actions

export default reloadSlice.reducer
