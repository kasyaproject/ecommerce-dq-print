import mongoose from "mongoose";

export const connectToDB = async () => {
  const connection = {};

  try {
    // Jika sudah ada connection
    if (connection.isConnected) return;

    // Jika belum ada connection
    const db = await mongoose.connect(process.env.MONGO_DB);
    connection.isConnection = db.connection[0].readyState;
  } catch (error) {
    handleError(error);
  }
};
