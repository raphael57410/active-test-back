import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    number: Number,

},{ timestamps: true });
export const UserNumber = mongoose.model("Number", userSchema);