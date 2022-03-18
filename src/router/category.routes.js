import express from "express";

const router = express.Router();

import {
  allCategories,
  createCategories,
} from "../controller/category.controller.js";

router.get("/", allCategories);
router.post("/", createCategories);

export default router;
