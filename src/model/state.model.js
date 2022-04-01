import mongoose from "mongoose";

const stateSchema = mongoose.Schema({
  state_name: {
    type: String,
    required: true,
  },
});

const state_schema = mongoose.model("state", stateSchema);

export default state_schema;
