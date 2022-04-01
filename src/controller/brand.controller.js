import brandSchema from "../model/brand.model.js";

export const allBrands = (req, res) => {
  brandSchema
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

export const createBrand = async (req, res) => {
  try {
    const brands = new brandSchema(req.body);

    const createNewBrand = await brands.save();

    res.status(200).json(createNewBrand);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
