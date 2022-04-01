import express from "express";

const router = express.Router();

import { allState, createState } from "../controller/state.controller.js";

router.get("/", allState);
router.post("/", createState);

export default router;
