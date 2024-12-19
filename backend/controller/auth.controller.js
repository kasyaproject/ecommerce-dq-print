import { generateTokenAndSetCookie } from "../lib/utils/generateToken.js";
import User from "../models/user.model.js";

export const login = async (req, res) => {
  res.json({
    message: "Login endpoint",
  });
};
export const logout = async (req, res) => {
  res.json({
    message: "Logout endpoint",
  });
};
export const checkMe = async (req, res) => {
  res.json({
    message: "checkMe endpoint",
  });
};

// export const login = async (req, res) => {
//   try {
//     const { username, password } = req.body;
//     const user = await User.findOne({ username }); // Mencari username di DB
//     const isPasswordCorrect = await bcrypt.compare(
//       // Mencari password di DB
//       password,
//       user?.password || ""
//     );

//     if (!user || !isPasswordCorrect) {
//       return res.status(400).json({ message: "Invalid username or password" });
//     }

//     generateTokenAndSetCookie(user._id, res);

//     return res.status(201).json({
//       _id: user._id,
//       fullName: user.fullName,
//       username: user.username,
//       email: user.email,
//       followers: user.followers,
//       following: user.following,
//       profileImg: user.profileImg,
//       coverImg: user.coverImg,
//     });
//   } catch (error) {
//     console.error("Error in login contoller", error.message);
//     return res.status(500).json({ message: "Internal Server Error" });
//   }
// };

// export const logout = async (req, res) => {
//   try {
//     res.cookie("jwt", "", { maxAge: 0 });
//     res.status(200).json({ message: "Logged out successfully!!" });
//   } catch (error) {
//     console.error("Error in logout contoller", error.message);
//     return res.status(500).json({ message: "Internal Server Error" });
//   }
// };

// export const checkMe = async (req, res) => {
//   try {
//     const user = await User.findById(req.user._id).select("-password");
//     return res.status(200).json(user);
//   } catch (error) {
//     console.error("Error in checkMe contoller", error.message);
//     return res.status(500).json({ message: "Internal Server Error" });
//   }
// };
