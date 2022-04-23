import express from "express";

const router = express.Router();

import {
  allWishlist,
  createWishlist,
  deleteWishlist,
} from "../controller/wishlist.controller.js";

router.get("/", allWishlist);
router.post("/", createWishlist);
router.delete("/:id", deleteWishlist);

export default router;
