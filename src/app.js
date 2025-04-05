const express = require("express");
const app = express();

app.get("/test",(req,res) => {
    res.send("hello from the server");
});

app.get("/user/:userid/:name/:password",(req,res)=>{
    console.log(req.params);
    res.send({Name : "yashwanth", profession: "full stack developer"});
});
app.post(/.*fly$/,(req,res)=>{
    console.log(req.query);
    res.send({Name : "yashwanth", profession: "full stack developer",lastName: "kancharla"});
})

app.get("/",(req,res) => {
    res.send("hi from the server")
});

app.listen(3000,() => {
    console.log("i am listening");
});