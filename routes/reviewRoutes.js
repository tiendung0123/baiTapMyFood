const express = require('express');
const { addReview, getReviewsByUser, getReviewsByRestaurant } = require('../controllers/reviewController');

const router = express.Router();

router.post('/reviews', addReview);
router.get('/reviews/user/:userId', getReviewsByUser);
router.get('/reviews/restaurant/:restaurantId', getReviewsByRestaurant);

module.exports = router;
