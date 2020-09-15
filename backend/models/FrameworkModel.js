const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FrameworkSchema = new  Schema({
    name:{type:String},
    explanation:{type:String}
 },
 { 
  timestamps:true
 }
);
const Framework = mongoose.model('Framewok',FrameworkSchema)
module.exports=Framework;