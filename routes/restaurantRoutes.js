const express = require('express');
const { getRestaurants, getTopRestaurantsByLikes } = require('../controllers/restaurantController');

const router = express.Router();

router.get('/restaurants', getRestaurants);
router.get('/restaurants/top-likes', getTopRestaurantsByLikes);

module.exports = router;
