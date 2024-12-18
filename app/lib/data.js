import { connect } from "mongoose";
import { User } from "./model";
import { connectToDB } from "./utils";

export const fetchUsers = async () => {
  try {
    connectToDB();
    const users = await User.find();

    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to Fetch Data User on data.js");
  }
};
