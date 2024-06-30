const { User, Like, Order, Review, Restaurant } = require('../models');
const sequelize = require('../config/database');

exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
};

exports.getTopUsersByLikes = async (req, res) => {
  try {
    const topUsers = await Like.findAll({
      attributes: ['userId', [sequelize.fn('COUNT', sequelize.col('userId')), 'likeCount']],
      group: ['userId'],
      order: [[sequelize.literal('likeCount'), 'DESC']],
      limit: 5,
      include: [{
        model: User,
        attributes: ['id', 'name', 'email']
      }]
    });

    res.json(topUsers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch top users by likes' });
  }
};

exports.getTopRestaurantsByLikes = async (req, res) => {
  try {
    const topRestaurants = await Like.findAll({
      attributes: ['restaurantId', [sequelize.fn('COUNT', sequelize.col('restaurantId')), 'likeCount']],
      group: ['restaurantId'],
      order: [[sequelize.literal('likeCount'), 'DESC']],
      limit: 2,
      include: [{
        model: Restaurant,
        attributes: ['id', 'name']
      }]
    });

    res.json(topRestaurants);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch top restaurants by likes' });
  }
};

exports.getMostActiveUsers = async (req, res) => {
  try {
    const mostActiveUsers = await Order.findAll({
      attributes: ['userId', [sequelize.fn('COUNT', sequelize.col('userId')), 'orderCount']],
      group: ['userId'],
      order: [[sequelize.literal('orderCount'), 'DESC']],
      limit: 1,
      include: [{
        model: User,
        attributes: ['id', 'name', 'email']
      }]
    });

    res.json(mostActiveUsers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch most active users' });
  }
};

exports.getInactiveUsers = async (req, res) => {
  try {
    const inactiveUsers = await User.findAll({
      include: [
        { model: Order, required: false },
        { model: Like, required: false },
        { model: Review, required: false },
      ],
      having: sequelize.literal('COUNT(Orders.id) = 0 AND COUNT(Likes.id) = 0 AND COUNT(Reviews.id) = 0'),
      group: ['User.id']
    });

    res.json(inactiveUsers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch inactive users' });
  }
};
