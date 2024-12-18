import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
      unique: true,
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

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 3,
    },
    category: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
    },
    color: {
      type: Number,
    },
    size: {
      type: Number,
    },
    description: {
      type: String,
    },
    img: {
      type: String,
    },
  },
  { timestamps: true }
);

// ini kondisi jika (model ada || model tidak ada) saat digunakan
export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const Products =
  mongoose.models.Product || mongoose.model("Product", productSchema);
