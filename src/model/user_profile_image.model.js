import mongoose from "mongoose";
import userSchema from "./user.model.js";

const userProfileImageSchema = mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: userSchema,
    // required: true,
  },
  profile_image: {
    type: Object,
    // required: true,
  },
});

const user_profile_image_schema = mongoose.model(
  "user_profile_image",
  userProfileImageSchema
);

export default user_profile_image_schema;
