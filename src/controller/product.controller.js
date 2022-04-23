import productSchema from "../model/product.model.js";

export const createProduct = async (req, res) => {
  try {
    let productImages = [];
    for (let item of req.files) {
      // const tempImageURL = `https://staging-reseller-bazzar.herokuapp.com/assets/products/${item.filename}`;
      const tempImageURL = `http://localhost:3000/assets/products/${item.filename}`;
      productImages.push(tempImageURL);
    }
    const productData = new productSchema({
      user_id: req.body.user_id,
      product_name: req.body.product_name,
      brand_name: req.body.brand_name,
      address: req.body.address,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      sub_category: req.body.sub_category,
      state: req.body.state,
      city: req.body.city,
      zipCode: req.body.zipCode,
      product_image: productImages,
    });

    const createData = await productData.save();

    res.status(201).json(createData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getAllProducts = (req, res) => {
  productSchema
    .aggregate([
      {
        $lookup: {
          from: "users",
          localField: "user_id",
          foreignField: "_id",
          as: "user",
        },
      },
    ])
    .then((data) => res.json(data));
};

export const getProduct = async (req, res) => {
  try {
    const getProduct = await productSchema.findById(req.params.id);
    res.status(200).json(getProduct);
  } catch (error) {
    console.log({ message: error.message });
  }
};
