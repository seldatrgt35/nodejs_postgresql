const express = require('express');
const categoryController = require('../controller/categoryController');
const router = express.Router();

router.post('/', categoryController.create);
router.get('/', categoryController.getAll);

module.exports = router;
