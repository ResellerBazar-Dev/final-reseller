import express from "express";

const router = express.Router();

import { createUser } from "../controller/user.controller.js";

// router.get("/", getUser);
router.post("/", createUser);

export default router;
