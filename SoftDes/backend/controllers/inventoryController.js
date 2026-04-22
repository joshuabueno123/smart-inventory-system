const Inventory = require("../models/Inventory");

exports.getItems = async (req, res) => {
  const items = await Inventory.find();
  res.json(items);
};

exports.addItem = async (req, res) => {
  const item = new Inventory(req.body);
  await item.save();
  res.json(item);
};