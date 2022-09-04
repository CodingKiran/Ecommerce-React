const express = require('express')

const app = express()

app.listen(8080, (req,res)=> {
    console.log("listening at 8080");
})

app.get("/", (req,res)=>{
    res.send("hello world")
})