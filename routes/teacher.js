const router = require("express").Router();
const {teacher} = require("../models");

router.get("/",(req,res)=>{
    res.send("Teacher route is working")
})

router.post("/teacheradd",async(req,res)=>{
    try{
        const teacherAdd = new teacher(req.body);

        const data =await teacherAdd.save();
        return res.json(data);
    }
    catch(error){
        return res.json({msg:error.message})
    }
})



module.exports=router
