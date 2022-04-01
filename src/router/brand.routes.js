import express from "express";

const router = express.Router();

import { allBrands, createBrand } from "../controller/brand.controller.js";

router.get("/", allBrands);
router.post("/", createBrand);

export default router;
