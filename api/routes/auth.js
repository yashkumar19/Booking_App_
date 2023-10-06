import express from "express";
import { login, register } from "../controllers/auth.js";

const router = express.Router();   // is used to create modular and mountable route handlers in an Express application.

router.post("/register", register)
router.post("/login", login)

export default router