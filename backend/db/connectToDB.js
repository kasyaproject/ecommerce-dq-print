import mongoose from "mongoose";

export const connectToDB = async () => {
  try {
    // Koneksi ke MONGODB
    const db = await mongoose.connect(process.env.MONGO_DB);

    console.log(`MongoDB connected: ${db.connection.host}`);
  } catch (err) {
    console.log("Connect to DB Failed on utils.js : ", err);
    process.exit(1);
  }
};
