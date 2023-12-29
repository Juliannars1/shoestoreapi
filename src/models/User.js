const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  user_id: { type: String, required: true },
  marca: { type: String, required: true },
  porcentaje_descuento: { type: Number, required: true },
});

module.exports = mongoose.model("Users", userSchema);
