const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    CPT : { type : Number, required : true},
    Diagnosis : {type : String, required : true},
    Units : {type : Number, required : true},
    Price : {type : String, required : true}
})

const myModel = mongoose.model('tables', schema);

module.exports = myModel;