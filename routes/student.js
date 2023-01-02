const router = require("express").Router();
const {student, Class, teacher} = require("../models");


router.get("/",(req,res)=>{
    res.send("student route is working");
})

router.post("/studentadd",async (req,res)=>{
        try{
            const studentData = await student.create(req.body);
            const classData = await Class.findByIdAndUpdate(
                req.body.classID,
                {
                    $push:{studentsId:studentData._id},
                },
               {new:true}
            );
            res.json({student:studentData,Class:classData})
        }
        
        catch(error){
            return res.json({msg:error.message})
        }
})

router.get("/studentslist",async(req,res)=>{
    const studentslist = await student.find()
    .populate("classID","classname")
    .populate("classTeacherID","name moblie_no")
    res.json(studentslist)
})


module.exports=router;