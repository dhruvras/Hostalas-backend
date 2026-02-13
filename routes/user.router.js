import {createUser} from "../controllers/user.controller.js";
import express from "express";

const router = express.Router();

router.post("/register", createUser);

export default router;