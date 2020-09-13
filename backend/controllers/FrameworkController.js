const Framework = require('../models/FrameworkModel');
const Tier = require('../models/TierModel');

const findAllFramework = (req, res)=>{
    Framework.find()
    .then(frameworks=>res.json(frameworks))
    .catch(error=>res.status(400).json('Error: '+error))
}

const addFramework = (req, res)=>{
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

const findAllTier = (req, res)=>{   
    Tier.find(req.body.idFramework)
    .then(tiers=>{
        res.json(tiers)
    })
    .catch(error=>res.status(400).json('Error: '+error))
}

const addTier = (req, res)=>{
    const idFramework = req.body.idFramework;
    const name =req.body.name;
    const explanation = req.body.explanation;
    const tier = new Tier({
        idFramework,
        name,
        explanation
    })
    tier.save()
    .then(tier=>res.json('Tier Added!'))
    .catch(error=>res.status(400).json('Error:'+error))
}

module.exports = {
    findAllFramework, addFramework, findAllTier, addTier
}