import { User } from "../models/user.model";
import { connectToDB } from "../db/connectToDB";

export const fetchUsers = async (search, page) => {
  const regex = new RegExp(search, "i");

  const itemPerPage = 10;

  try {
    await connectToDB();

    // Konsisten antara count dan query dengan kondisi yang sama
    const filter = {
      $or: [
        { fullname: { $regex: regex } },
        { username: { $regex: regex } },
        { email: { $regex: regex } },
      ],
    };

    // Menghitung jumlah total pengguna yang sesuai
    const countUser = await User.countDocuments(filter);

    // Mengambil data pengguna dengan paginasi
    const users = await User.find(filter)
      .limit(itemPerPage)
      .skip(itemPerPage * (Math.max(page, 1) - 1));

    return { countUser, users };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to Fetch Data User on data.js");
  }
};

export const userDetail = async () => {};
