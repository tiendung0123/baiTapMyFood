const { Order } = require('../models');

exports.addOrder = async (req, res) => {
  try {
    const { userId, restaurantId, items } = req.body;
    const order = await Order.create({ userId, restaurantId, items });
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add order' });
  }
};

exports.getOrdersByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const orders = await Order.findAll({ where: { userId } });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch orders by user' });
  }
};

exports.getOrdersByRestaurant = async (req, res) => {
  try {
    const { restaurantId } = req.params;
    const orders = await Order.findAll({ where: { restaurantId } });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch orders by restaurant' });
  }
};
