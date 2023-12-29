//cambiar por import
require("dotenv").config(); // Load environment variables from .env file

const express = require("express");
const mongoose = require("mongoose");
const app = express();

const DB_URL = process.env.MONGODB_URI + process.env.MONGO_DATABASE; // Use environment variable
const PORT = process.env.PORT || 3000; // Use environment variable or default to 3000
//centralizar los errores en la aplicacion
mongoose
  .connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Set up Express middleware, routes, and listen to a port.
app.use(express.json());
/////
app.use("/api", require("./routes/api"));

///////

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
