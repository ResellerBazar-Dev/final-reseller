import stateSchema from "../model/state.model.js";

export const allState = async (req, res) => {
  try {
    const getAllState = await stateSchema.find();

    res.status(200).json(getAllState);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
export const createState = async (req, res) => {
  try {
    const state = new stateSchema(req.body);

    const createNewState = await state.save();

    res.status(200).json(createNewState);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
