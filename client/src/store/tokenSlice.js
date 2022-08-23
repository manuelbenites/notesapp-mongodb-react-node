import { createSlice } from "@reduxjs/toolkit"

const initialState = localStorage.getItem("token")

const tokenSlice = createSlice({
	name: "token",
	initialState,
	reducers: {
		setToken: (state, action) => action.payload,
		resetToken: (state, action) => action.payload,
	},
})

export const { setToken, resetToken } = tokenSlice.actions

export default tokenSlice.reducer
