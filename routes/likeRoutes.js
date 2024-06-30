const express = require('express');
const { likeRestaurant, unlikeRestaurant, getLikesByUser, getLikesByRestaurant } = require('../controllers/likeController');

const router = express.Router();

router.post('/likes', likeRestaurant);
router.delete('/likes', unlikeRestaurant);
router.get('/likes/user/:userId', getLikesByUser);
router.get('/likes/restaurant/:restaurantId', getLikesByRestaurant);

module.exports = router;
