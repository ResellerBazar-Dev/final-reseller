import mongoose from "mongoose";
import user_profile_image_schema from "../model/user_profile_image.model.js";

const userProfileSchema = mongoose.Schema({
  profile_image_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: user_profile_image_schema,
    required: true,
  },
  full_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  join_date: {
    type: Date,
    default: Date.now(),
  },
  pin_code: {
    type: Number,
    required: true,
  },
  taluka: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
});

const user_profile_schema = mongoose.model("user_profile", userProfileSchema);

export default user_profile_schema;
