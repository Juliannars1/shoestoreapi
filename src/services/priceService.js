const User = require("../models/User");
const Product = require("../models/Product");

exports.getUserSpecialPrice = async (user_id, nombre_producto) => {
  // Busca el precio especial para el cliente y la marca del producto
  //console.log(user_id + nombre_producto);
  const specialPrice = await User.findOne({
    user_id,
    marca: nombre_producto,
  }).exec();
  console.log(specialPrice);
  if (!specialPrice) {
    return null; // No se encontró un precio especial para el cliente y la marca
  }

  console.log("entro a product: " + nombre_producto);
  // Calcula el precio final aplicando el porcentaje de descuento al precio base
  const product = await Product.findOne({ marca: nombre_producto }).exec();
  console.log("entro a product: " + product);

  if (!product) {
    throw new Error("Product not found");
  }

  const precioBase = product.precio_base;
  const porcentajeDescuento = specialPrice.porcentaje_descuento;
  const precioConDescuento =
    precioBase - (precioBase * porcentajeDescuento) / 100;

  return product.en_stock ? precioConDescuento : product.precio_base;
};
