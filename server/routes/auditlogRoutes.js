
const express = require('express');
const auditlogController = require('../controller/auditlogController');
const router = express.Router();

router.post('/', auditlogController.create);
router.get('/', auditlogController.getAll);

module.exports = router;
