const express = require("express")
const connectDB =require("./config/db");
const apiRouter =require("./routes");



const app = express();
const port = process.env.PORT || 4000 ;

connectDB();

app.use(express.json());
app.use("/",apiRouter);


app.listen(port,()=>{

    console.log(`server is up and running on port ${port}`);
})

