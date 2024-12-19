import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import usersRoutes from "./routes/users.routes.js";
import productsRoutes from "./routes/products.routes.js";
import { connectToDB } from "./db/connectToDB.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

console.log(process.env.MONGO_DB);

app.use("/api/auth", authRoutes);
app.use("/api/user", usersRoutes);
app.use("/api/product", productsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectToDB();
});
