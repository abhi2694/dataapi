const express = require('express');
const router = express.Router();

const controller = require('./controller');

router.post('/', controller.postOne);
router.get('/', controller.getList);
router.get('/:skootrideId', controller.getOne);
router.put('/:skootrideId', controller.putOne);
router.delete('/:skootrideId', controller.deleteOne);

module.exports = router;
