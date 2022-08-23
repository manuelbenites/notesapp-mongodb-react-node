import mongoose from "mongoose"
const { Schema, model } = mongoose

const noteSchema = new Schema({
  title: String,
  content: String,
  theme: String,
  userId: String,
})

export default model("note", noteSchema)
