import subCategorySchema from "../model/sub_category.model.js";

export const allSubCategories = (req, res) => {
  subCategorySchema
    .aggregate([
      {
        $lookup: {
          from: "categories",
          localField: "category_id",
          foreignField: "_id",
          as: "categories",
        },
      },
    ])
    .then((data) => res.json(data));
};

export const createSubCategories = async (req, res) => {
  try {
    const subCategories = new subCategorySchema(req.body);

    const createNewsubCat = await subCategories.save();

    res.status(200).json(createNewsubCat);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
