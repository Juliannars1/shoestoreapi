const productService = require("../services/productService");

exports.getProducts = async (req, res) => {
  try {
    const products = await productService.getProductsInStock();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
