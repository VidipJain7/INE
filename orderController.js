const { Order, MenuItem, User } = require('../models');

exports.placeOrder = async (req, res) => {
  const { tableNumber, items } = req.body;

  try {
    const order = new Order({ tableNumber, status: 'Pending', customerId: req.user.id });
    await order.save();
    await order.setMenuItems(items);
    res.json(order);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.findAll({ include: [MenuItem, User] });
    res.json(orders);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.updateOrderStatus = async (req, res) => {
  const { orderId, status } = req.body;

  try {
    let order = await Order.findByPk(orderId);
    if (!order) return res.status(404).json({ msg: 'Order not found' });

    order.status = status;
    await order.save();
    res.json(order);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
