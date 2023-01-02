const mongoose = require("mongoose")

const TeacherSchema = new mongoose.Schema({
    name:String,
    degree:{
        type:String,
    },
    experience:{
        type:Number,
        default:0,
    },
    moblie_no:{
        type: String,
    }
   
},{timestamps:true})

const teacher = mongoose.model("teachers",TeacherSchema);

module.exports=teacher;