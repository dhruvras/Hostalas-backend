import {sendMail} from "../controllers/email.controller.js";
import express from "express";

const router = express.Router();


router.get("/:email", sendMail);

export default router; 