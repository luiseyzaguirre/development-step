const express = require('express');
const router = express.Router();
const frameworController = require('../controllers/FrameworkController');

router.get('/framework',frameworController.findAllFramework);
router.post('/framework/add',frameworController.addFramework);
router.get('/framework/tier',frameworController.findAllTier);
router.post('/framework/tier/add',frameworController.addTier);

module.exports = router;