const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())

let counter =0;
const id = Math.random();

app.get("/hello", (req,res)=>{
    res.send(`Hello ID number ${id} you are visitor number: ` + ++counter)
})

app.listen(3000, ()=>{console.log("Application is up and running! :D")})