import wishlistSchema from "../model/wishlist.model.js";

export const allWishlist = (req, res) => {
  wishlistSchema
    .aggregate([
      {
        $lookup: {
          from: "products",
          localField: "product_id",
          foreignField: "_id",
          as: "product",
        },
      },
    ])
    .then((data) => res.json(data));
};

export const createWishlist = async (req, res) => {
  try {
    const wishlist = new wishlistSchema(req.body);

    const createNewWishlist = await wishlist.save();

    res.status(201).json(createNewWishlist);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const deleteWishlist = async (req, res) => {
  try {
    const wishlist = await wishlistSchema.findByIdAndDelete(req.params.id);

    // const deleteWishlist = await wishlist.remove();

    res.status(200).json("Delete Successfully");
  } catch (error) {
    res.status(500).json(error.message);
  }
};
