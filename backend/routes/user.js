const express = require('express');
const { createExpence, getExpences, deleteExpence, editExpence } = require('../controllers/user');
const router = express.Router();

router.post('/create-expence',createExpence);
router.get('/get-expences',getExpences);
router.post('/delete-expences',deleteExpence);
router.post('/edit-expences',editExpence);


module.exports = router;