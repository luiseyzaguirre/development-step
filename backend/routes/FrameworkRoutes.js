const express = require('express');
const router = express.Router();
const frameworkController = require('../controllers/FrameworkController');

router.get('/findAll',frameworkController.findAll);
router.post('/save',frameworkController.save);
router.get('/:idFramework/tier/findAll',frameworkController.findAllTiers);

module.exports = router;