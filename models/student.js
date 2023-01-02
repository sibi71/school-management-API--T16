const mongoose= require("mongoose");

const StudentSchema = new mongoose.Schema({
    name:String,
    enrollmentDate:String,
    classID:{
        type:mongoose.Types.ObjectId,
        ref:"classlists",
    },
    classTeacherID:{
        type:mongoose.Types.ObjectId,
        ref:"teachers",
    },
    address:String,
    contact_no:String,
},{timestamps:true})


const student = mongoose.model("students",StudentSchema);

module.exports=student;