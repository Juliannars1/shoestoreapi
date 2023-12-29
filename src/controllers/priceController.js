const priceService = require("../services/priceService");

exports.getPrice = async (req, res) => {
  try {
    const { user_id, nombre_producto } = req.params;
    const price = await priceService.getUserSpecialPrice(
      user_id,
      nombre_producto
    );
    console.log(price);
    res.json({ price });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
