import express from "express";
import auth from "../middleware/auth.js";

const router = express.Router();

import { getUser, createUser } from "../controller/auth.controller.js";

router.get("/user", auth, getUser);
router.post("/", createUser);

export default router;
