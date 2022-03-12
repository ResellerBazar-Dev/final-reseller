import multer from "multer";
import fs from "fs";

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

export default upload;
