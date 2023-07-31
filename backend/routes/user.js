const express = require('express');
const { createExpence } = require('../controllers/user');
const router = express.Router();

router.post('/create-expence',createExpence);


module.exports = router;