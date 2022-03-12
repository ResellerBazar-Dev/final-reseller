import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  product_name: {
    type: String,
    // required: true,
  },
  brand_name: {
    type: String,
    // required: true,
  },
  address: {
    type: String,
    // required: true,
  },
  description: {
    type: String,
    // required: true,
  },
  price: {
    type: Number,
    // required: true,
  },
  category: {
    type: String,
    // required: true,
  },
  sub_category: {
    type: String,
    // required: true,
  },
  city: {
    type: String,
    // required: true,
  },
  dist: {
    type: String,
    // required: true,
  },
  zipCode: {
    type: String,
    // required: true,
  },
  product_image: {
    type: Array,
    // required: true,
  },
});

const product = mongoose.model("product", productSchema);

export default product;
