const Product = require("../models/Product");

exports.getProductsInStock = async () => {
  return Product.find();
};
