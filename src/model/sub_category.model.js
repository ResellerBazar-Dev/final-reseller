import mongoose from "mongoose";
import categorySchema from "./category.model.js";

const subCategorySchema = mongoose.Schema({
  category_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: categorySchema,
    required: true,
  },
  sub_category_name: {
    type: String,
    required: true,
  },
});

const subCatSchema = mongoose.model("subCategories", subCategorySchema);

export default subCatSchema;
