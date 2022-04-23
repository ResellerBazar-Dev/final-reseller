import express from "express";
import upload from "../middleware/multer.js";

const router = express.Router();

import {
  getProfileImage,
  updateProfile,
  // updateProfileImage,
  updateProfileImage,
} from "../controller/user_profile.controller.js";

router.get("/", getProfileImage);
router.put("/:id", updateProfile);
router.post("/image", upload.single("profile_image"), updateProfileImage);
// router.put("/:id", updateProfileImage);

export default router;
