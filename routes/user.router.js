import {createUser, getUser, deleteUser, allUsers} from "../controllers/user.controller.js";
import express from "express";

const router = express.Router();

router.post("/register", createUser);
router.delete("/:email", deleteUser);
router.post("/checkemail", getUser);
router.get("/", allUsers);
export default router; 