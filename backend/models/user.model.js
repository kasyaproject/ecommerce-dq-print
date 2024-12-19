import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
      min: 6,
      max: 30,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      min: 6,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      min: 6,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
    img: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
