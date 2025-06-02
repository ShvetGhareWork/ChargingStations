import express from "express";
import { register, login } from "../controllers/authController.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const router = express.Router();

router.post("/register", verifyToken, register);
router.post("/login", verifyToken, login);

export default router;
