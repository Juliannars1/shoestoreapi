const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  marca: { type: String, required: true },
  precio_base: { type: Number, required: true },
  en_stock: { type: Boolean, default: true },
});

module.exports = mongoose.model("Products", productSchema);
