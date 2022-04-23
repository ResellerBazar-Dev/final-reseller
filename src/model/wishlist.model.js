import mongoose from "mongoose";
import productSchema from "./product.model.js";

const wishlistSchema = mongoose.Schema({
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: productSchema,
    // required: true,
  },
});

const wishlist_schema = mongoose.model("wishlist", wishlistSchema);

export default wishlist_schema;
