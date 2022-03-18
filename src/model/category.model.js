import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
  category_name: {
    type: String,
    required: true,
  },
});

const catSchema = mongoose.model("categories", categorySchema);

export default catSchema;
