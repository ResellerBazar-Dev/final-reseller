import mongoose from "mongoose";
import stateSchema from "./state.model.js";

const citySchema = mongoose.Schema({
  state_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: stateSchema,
    required: true,
  },
  city_name: {
    type: String,
    required: true,
  },
});

const city_schema = mongoose.model("city", citySchema);

export default city_schema;
