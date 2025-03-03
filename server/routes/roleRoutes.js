const express = require('express');
const roleController = require('../controller/roleController');
const router = express.Router();

router.post('/', roleController.create);
router.get('/', roleController.getAll);
router.get('/:id', roleController.getById);
router.put('/:id', roleController.update);
router.delete('/:id', roleController.delete);



module.exports = router;
