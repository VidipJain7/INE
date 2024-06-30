const express = require('express');
const router = express.Router();
const { placeOrder, getOrders, updateOrderStatus } = require('../controllers/orderController');
const auth = require('../middleware/auth');

router.post('/', auth, placeOrder);
router.get('/', auth, getOrders);
router.put('/', auth, updateOrderStatus);

module.exports = router;
