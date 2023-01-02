const router = require("express").Router();
const { Class }= require("../models");

router.get("/",(req,res)=>{
    res.send("Class route is working");

})
router.post("/classadd",async (req,res)=>{
    try{
        const classadd = new Class(req.body);
        const data = await classadd.save();

        return res.json(data);
    }
    catch(error){
        return res.json({msg:error.message})
    }
})
router.get("/classList",async (req,res)=>{
    const classList = await Class.find()
    .populate("studentsId","name enrollmentDate")
    .populate("teacherId","name  experience")

    res.json(classList);
})

module.exports=router