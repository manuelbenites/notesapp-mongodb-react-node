import mongoose from "mongoose"

mongoose
	.connect("mongodb://localhost:27017/realnotes-db")
	.then((db) => console.log("DB is connected"))
	.catch((error) => console.log(error))
