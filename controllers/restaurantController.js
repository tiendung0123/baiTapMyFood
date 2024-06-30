const { Restaurant, Like, Review, Order } = require('../models');

exports.getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.findAll();
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch restaurants' });
  }
};

exports.getTopRestaurantsByLikes = async (req, res) => {
  try {
    const topRestaurants = await Like.findAll({
      attributes: ['restaurantId', [sequelize.fn('COUNT', sequelize.col('restaurantId')), 'likeCount']],
      group: ['restaurantId'],
      order: [[sequelize.literal('likeCount'), 'DESC']],
      limit: 2,
    });
    res.json(topRestaurants);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch top restaurants by likes' });
  }
};
