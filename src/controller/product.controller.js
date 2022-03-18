import productSchema from "../model/product.model.js";
// import toBase64 from "../helper/commonFunc.js";

export const createProduct = async (req, res) => {
  try {
    let productImages = [];
    for (let item of req.files) {
      const tempImageURL = `http://localhost:3000/assets/products/${item.filename}`;
      productImages.push(tempImageURL);
    }
    const productData = new productSchema({
      product_name: req.body.product_name,
      brand_name: req.body.brand_name,
      address: req.body.address,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      sub_category: req.body.sub_category,
      dist: req.body.dist,
      zipCode: req.body.zipCode,
      product_image: productImages,
    });

    const createData = await productData.save();

    res.status(201).json(createData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const getProducts = await productSchema.find();
    res.status(200).json(getProducts);
  } catch (error) {
    console.log({ message: error.message });
  }
};
