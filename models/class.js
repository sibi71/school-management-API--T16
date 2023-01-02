const mongoose = require("mongoose");


const classSchema = new mongoose.Schema({
    studentsId:[{
        type:mongoose.Types.ObjectId,
        ref:"students",
    }],
    teacherId:[
        {
            type:mongoose.Types.ObjectId,
            ref:"teachers",
        }
    ],
    classname:String,
}
,{timestamps:true})

const classlist = mongoose.model("classlists",classSchema);

module.exports=classlist;