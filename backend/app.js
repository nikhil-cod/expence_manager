const express = require('express');
require("./db/index");
const app = express();
const cors = require('cors');
const userRouter = require("./routes/user")
app.use(express.json())
app.use(cors());
app.use("/api",userRouter);

app.get('/',(req,res)=>{
res.send("Hello, You are on 8000");
});

app.get('/about',(req,res)=>{
    res.send("Hello, You are on ABOUT 8000");
    });
app.listen(8000,()=>{
    console.log("Listening on 8000");
})