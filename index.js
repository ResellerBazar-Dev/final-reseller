import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import productRoutes from "./src/router/product.routes.js";
import imageUploadRoutes from "./src/router/productImage.routes.js";
import categoriesRoutes from "./src/router/category.routes.js";
import subCategoriesRoutes from "./src/router/sub_category.routes.js";
import brandRoutes from "./src/router/brand.routes.js";
import stateRoutes from "./src/router/state.routes.js";
import cityRoutes from "./src/router/city.routes.js";
import path from "path";

const PORT = process.env.PORT || 5000;

const app = express();
app.use("/assets", express.static(path.join("assets")));
app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/products/:id", productRoutes);
app.use("/api/products_images", imageUploadRoutes);
app.use("/api/allProducts", productRoutes);
app.use("/api/categories", categoriesRoutes);
app.use("/api/subCategories", subCategoriesRoutes);
app.use("/api/brands", brandRoutes);
app.use("/api/state", stateRoutes);
app.use("/api/city", cityRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve("client", "build", "index.html"));
  });
}

const DB =
  "mongodb+srv://reseller:reseller123@reselllerbazzar.zg4mo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose
  .connect(DB)
  .then(() => console.log("MongoDB connected..."))
  .catch((error) => console.log(error.message));

app.listen(PORT, () => console.log(`server running at PORT ${PORT}`));
