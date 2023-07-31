const mongoose = require("mongoose");
const expenceSchema = mongoose.Schema({
    date:{
        type:String,
        trim:true,
        required:true
    },
    title:{
        type:String,
        required:true,
    },
    amount:{
        type:Number,
        required:true
    },
});

// expenceSchema.pre('save', async function(next){
//     next();
// });

module.exports =  mongoose.model("allexpences",expenceSchema); // "allexpences" will be the name od collection of DB