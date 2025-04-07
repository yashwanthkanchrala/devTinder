const express = require("express");
const app = express();
const { AdminAuth,userAuth } = require("./middlewares/auth.js")

app.get("/getUserData",(req,res) => {
    try{
        throw new Error("ghtyy");
        res.send("ok");
    }
    catch (err){
        res.status(500).send("something went wrong");
    };
});

app.use("/",(err,req,res,next) => {
    if(err) {
        res.status(500).send("error contact support")
    };
});
















/*app.use("/admin",AdminAuth);

app.get("/admin/getAllData",(req,res,next) =>{
    res.send("All Data Sent");
});

app.post("/admin/deleteData",(req,res,next) =>{
    res.send("all data deleted");
});
app.use("/user",userAuth,(req,res,next) =>{
    //res.send("All Data Sent");
    next();
});
app.get("/user/userData",(req,res,next) =>{
    res.send("user Data Sent");
});*/



/*app.use("/user",(req,res,next) => {
    res.send("hello from the server");
    next()
},
(req,res,next) => {
    console.log("routehandler2 testing");
    //res.send("route handler 2");
}
);*/

/*app.get("/user/:userid/:name/:password",(req,res)=>{
    console.log(req.params);
    res.send({Name : "yashwanth", profession: "full stack developer"});
});
app.post(/.*fly$/,(req,res)=>{
    console.log(req.query);
    res.send({Name : "yashwanth", profession: "full stack developer",lastName: "kancharla"});
})

app.get("/",(req,res) => {
    res.send("hi from the server")
});*/

app.listen(7777,() => {
    console.log("i am listening");
});