const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StepSchema = new Schema({
    idTier:{type:String},
    name:{type:String},
    explanation:{type:String} 
    },{
        timestamps:true
    }
)
const Step = mongoose.model('Step',StepSchema);
module.exports = Step;