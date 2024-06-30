const { MenuItem } = require('../models');

exports.getMenu = async (req, res) => {
  try {
    const menu = await MenuItem.findAll();
    res.json(menu);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.addMenuItem = async (req, res) => {
  const { name, description, price, category, image } = req.body;

  try {
    const newItem = new MenuItem({ name, description, price, category, image });
    await newItem.save();
    res.json(newItem);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
