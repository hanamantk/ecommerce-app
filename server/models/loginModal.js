import mongoose from "mongoose";

const loginModal = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    index: true,
    dropDups: true,
  },
  pwd: { type: String, required: true },
});
export default loginModal;
