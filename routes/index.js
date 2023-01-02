const router = require("express").Router();
const teacherRoute = require("./teacher");
const studentRoute = require("./student");
const classRoute = require("./class");


router.use("/teacher",teacherRoute);
router.use("/student",studentRoute);
router.use("/class",classRoute);

module.exports=router;