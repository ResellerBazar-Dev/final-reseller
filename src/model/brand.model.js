import mongoose from "mongoose";
import categorySchema from "./category.model.js";

const brandSchema = mongoose.Schema({
  category_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: categorySchema,
    required: true,
  },
  brand_name: {
    type: String,
    required: true,
  },
});

const brand_Schema = mongoose.model("brand", brandSchema);

export default brand_Schema;
