import multer from "multer";
import fs from "fs";

const imageFieldName = ["product_images", "profile_image"];

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === "product_images") {
      fs.mkdirSync("assets/products", { recursive: true });
      cb(null, "assets/products");
    } else if (file.fieldname === "profile_image") {
      fs.mkdirSync("assets/profile", { recursive: true });
      cb(null, "assets/profile");
    }
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: fileStorageEngine });

export default upload;
