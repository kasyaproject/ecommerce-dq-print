"use server";

import { revalidatePath } from "next/cache";
import { Products, User } from "./model";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";

export const addUser = async (formData) => {
  const {
    fullname,
    username,
    email,
    password,
    phone,
    address,
    isAdmin,
    isActive,
  } = Object.fromEntries(formData);

  console.log("Data input : ", formData);

  try {
    await connectToDB();

    // Hash password sebelum menyimpan ke database
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      fullname,
      username,
      email,
      password: hashedPassword,
      phone,
      address,
      isAdmin,
      isActive,
    });

    await newUser.save();
  } catch (error) {
    console.log(error);
    throw new Error("Faild to create user on Action.js!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};
export const addProduct = async (formData) => {
  const { name, category, price, stock, color, size, description } =
    Object.fromEntries(formData);

  console.log("Data input : ", formData);

  try {
    await connectToDB();

    const newProduct = new Products({
      name,
      category,
      price,
      stock,
      color,
      size,
      description,
    });

    await newProduct.save();
  } catch (error) {
    console.log(error);
    throw new Error("Faild to create user on Action.js!");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};
