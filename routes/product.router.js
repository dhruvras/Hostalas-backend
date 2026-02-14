import express from 'express';
import {createProduct, getProduct, deleteProduct, allProducts} from "../controllers/product.controller.js";

const router = express.Router();

router.post("/create", createProduct);
router.get("/:id", getProduct);
router.delete("/:id", deleteProduct);
router.get("/", allProducts);

export default router;