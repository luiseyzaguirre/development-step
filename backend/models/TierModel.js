const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TierSchema = new Schema({
    idFramework:{type:String},
    name:{type:String},
    explanation:{type:String}

},{
    timestamps:true
});
 
const Tier = mongoose.model('Tier', TierSchema)
module.exports = Tier;
