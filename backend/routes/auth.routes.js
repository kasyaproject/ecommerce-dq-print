import express from "express";
import { checkMe, login, logout } from "../controller/auth.controller.js";
import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/check", checkMe);
router.post("/login", login);
router.post("/logout", logout);

export default router;
