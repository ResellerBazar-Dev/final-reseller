import express, { Router } from "express";
import upload from "../middleware/multer.js";

const router = express.Router();

import {
  createProduct,
  getAllProducts,
  getProduct,
} from "../controller/product.controller.js";

router.post("/", upload.array("product_images"), createProduct);
router.get("/", getAllProducts);
router.get("/:id", getProduct);
export default router;
