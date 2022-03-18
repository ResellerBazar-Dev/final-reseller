import express from "express";

const router = express.Router();

import {
  allSubCategories,
  createSubCategories,
} from "../controller/subCategory.controller.js";

router.get("/", allSubCategories);
router.post("/", createSubCategories);

export default router;
