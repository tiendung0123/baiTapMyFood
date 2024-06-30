const express = require('express');
const { getUsers, getTopUsersByLikes, getMostActiveUsers, getInactiveUsers, getTopRestaurantsByLikes } = require('../controllers/userController');

const router = express.Router();

router.get('/users', getUsers);
router.get('/users/top-likes', getTopUsersByLikes);
router.get('/users/most-active', getMostActiveUsers);
router.get('/users/inactive', getInactiveUsers);
router.get('/restaurants/top-likes', getTopRestaurantsByLikes);

module.exports = router;
