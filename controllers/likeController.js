const { Like } = require('../models');

exports.likeRestaurant = async (req, res) => {
  try {
    const { userId, restaurantId } = req.body;
    const like = await Like.create({ userId, restaurantId });
    res.json(like);
  } catch (error) {
    res.status(500).json({ error: 'Failed to like restaurant' });
  }
};

exports.unlikeRestaurant = async (req, res) => {
  try {
    const { userId, restaurantId } = req.body;
    await Like.destroy({ where: { userId, restaurantId } });
    res.json({ message: 'Unliked successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to unlike restaurant' });
  }
};

exports.getLikesByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const likes = await Like.findAll({ where: { userId } });
    res.json(likes);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch likes by user' });
  }
};

exports.getLikesByRestaurant = async (req, res) => {
  try {
    const { restaurantId } = req.params;
    const likes = await Like.findAll({ where: { restaurantId } });
    res.json(likes);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch likes by restaurant' });
  }
};
