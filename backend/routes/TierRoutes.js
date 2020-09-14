const express = require('express');
const router = express.Router();
const tierController = require('../controllers/TierController')


router.get('/find/:id',tierController.find);
router.post('/save',tierController.save);
router.put('/update/:id',tierController.update);
router.delete('/delete/:id',tierController.toDelete);

module.exports = router;