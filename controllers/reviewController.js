const { Review } = require('../models');

exports.addReview = async (req, res) => {
  try {
    const { userId, restaurantId, content } = req.body;
    const review = await Review.create({ userId, restaurantId, content });
    res.json(review);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add review' });
  }
};

exports.getReviewsByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const reviews = await Review.findAll({ where: { userId } });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch reviews by user' });
  }
};

exports.getReviewsByRestaurant = async (req, res) => {
  try {
    const { restaurantId } = req.params;
    const reviews = await Review.findAll({ where: { restaurantId } });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch reviews by restaurant' });
  }
};
