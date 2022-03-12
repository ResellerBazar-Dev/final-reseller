import multer from "multer";
import fs from "fs";
import express from "express";

const router = express.Router();

const imageFieldName = ["product_images"];

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === "product_images") {
      fs.mkdirSync("assets/products", { recursive: true });
      cb(null, "assets/products");
    }
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: fileStorageEngine });

router.post("/", upload.array("product_images"), async (req, res) => {
  res.send(req.files);
  console.log(req.files);
});

export default router;
