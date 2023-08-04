const express = require('express');
const { createExpence, getExpences } = require('../controllers/user');
const router = express.Router();

router.post('/create-expence',createExpence);
router.get('/get-expences',getExpences);

module.exports = router;