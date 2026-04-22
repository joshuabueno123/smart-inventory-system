const express = require("express");
const cors = require("cors");

const inventoryRoutes = require("./routes/inventory");
const deliveryRoutes = require("./routes/delivery");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/inventory", inventoryRoutes);
app.use("/api/delivery", deliveryRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});