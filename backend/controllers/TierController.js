const Tier = require('../models/TierModel');

const find = (req, res)=>{   
    Tier.findById(req.params.id)
    .then(tier=>{
        res.json(tier)
    })
    .catch(error=>res.status(400).json('Find error: '+error))
}

const save = (req, res)=>{
    const tier = new Tier({
        idFramework: req.body.idFramework,
        name:req.body.name,
        explanation:req.body.explanation
    })
    tier.save()
    .then(tier=>res.json('Tier saved!'))
    .catch(error=>res.status(400).json('Add error:'+error))
}

const update = (req, res)=>{   
    Tier.findByIdAndUpdate({_id:req.params.id},
                           {name:req.body.name, explanation:req.body.explanation}
    )
    .then(tier=>{
        res.json("Updated ok ")
    })
    .catch(error=>res.status(400).json('Update error: '+error))
}

const toDelete = (req, res)=>{

    Tier.findByIdAndDelete(req.params.id)
    .then(tier=>{
        res.json("Deleted ok ")
    })
    .catch(error=>res.status(400).json('Delete error: '+error))
}


module.exports = {
    find, save, update, toDelete
}