const Framework = require('../models/FrameworkModel');
const Tier = require('../models/TierModel');

const findAll = (req, res)=>{
    Framework.find()
    .then(frameworks=>res.json(frameworks))
    .catch(error=>res.status(400).json('Error: '+error))
}

const save = (req, res)=>{
    const name = req.body.name;
    const explanation = req.body.explanation;
    
    const framework = new Framework({
        name,
        explanation
    });
    framework.save()
    .then(framework=>res.json('Framework added!'))
    .catch(error=>res.status(400).json('Error: '+error))
}

const findAllTiers = (req, res)=>{   
    Tier.find({idFramework:req.params.idFramework})
    .then(tiers=>{
        res.json(tiers)
    })
    .catch(error=>res.status(400).json('Find all error: '+error))
}

module.exports = {
    findAll, save, findAllTiers
}