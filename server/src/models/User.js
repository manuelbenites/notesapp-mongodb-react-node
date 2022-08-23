import mongoose from "mongoose"
import bcrypt from "bcrypt"
const { Schema, model } = mongoose

const userSchema = new Schema({
  username: {
    require: true,
    unique: true,
    type: String,
  },
  firstname: String,
  lastname: String,
  email: {
    require: true,
    unique: true,
    type: String,
  },
  password: {
    require: true,
    type: String,
  },
})

export const encryptPassword = (password) => bcrypt.hashSync(password, 10)

export const comparePassword = (password, hash) =>
  bcrypt.compareSync(password, hash)

export default model("user", userSchema)
