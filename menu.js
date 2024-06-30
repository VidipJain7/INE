const express = require('express');
const router = express.Router();
const { getMenu, addMenuItem } = require('../controllers/menuController');
const auth = require('../middleware/auth');

router.get('/', getMenu);
router.post('/', auth, addMenuItem);

module.exports = router;
