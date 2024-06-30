const express = require('express');
const { addOrder, getOrdersByUser, getOrdersByRestaurant } = require('../controllers/orderController');

const router = express.Router();

router.post('/orders', addOrder);
router.get('/orders/user/:userId', getOrdersByUser);
router.get('/orders/restaurant/:restaurantId', getOrdersByRestaurant);

module.exports = router;
