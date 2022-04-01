import express from "express";

const router = express.Router();

import { allCity, createCity } from "../controller/city.controller.js";

router.get("/", allCity);
router.post("/", createCity);

export default router;
