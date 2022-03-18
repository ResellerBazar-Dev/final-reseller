import categorySchema from "../model/category.model.js";

export const allCategories = async (req, res) => {
  try {
    const getAllCat = await categorySchema.find();

    res.status(200).json(getAllCat);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
export const createCategories = async (req, res) => {
  try {
    const categories = new categorySchema(req.body);

    const createNewCat = await categories.save();

    res.status(200).json(createNewCat);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
