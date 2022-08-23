import express from "express"
import morgan from "morgan"
import cors from "cors"
import * as dotenv from "dotenv"
import NoteRouter from "./routes/noteRoutes.js"
import AuthRouter from "./routes/authRouter.js"
import "./database.js"

const app = express()
const PORT = 4000
dotenv.config()

app.get("/", (req, res) => {
	res.send("Hello World")
})

app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
app.use("/api/auth", AuthRouter)
app.use("/api/notes", NoteRouter)

app.listen(PORT, () => {
	console.log("Server on Port ", PORT)
})
