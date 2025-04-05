const express = require("express");
const app = express();

app.get("/test",(req,res) => {
    res.send("hello from the server")
});

app.get("/",(req,res) => {
    res.send("hi from the server")
});

app.listen(3000,() => {
    console.log("i am listening");
});