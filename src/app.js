const express = require("express");
const app = express();
const { AdminAuth,userAuth } = require("./middlewares/auth.js");
const connectDB = require("./config/database.js");
const User = require("./models/user.js");

app.use(express.json());

app.post("/signup",async(req,res) => {
    
    console.log(req.body);
    const user = new User(req.body);
    try {
        await user.save();
        res.send("data successsfully saved");
    } catch(err){
        res.status(400).send("error savimg the user:" +err.message)
    };
    
});
app.get("/user",async(req,res) =>{

    const userEmail = req.body.emailId;
    try {
        const user = await User.find({emailId: userEmail});
        if(user.length===0){
            res.status(400).send("user not found");
        }else{
            res.send(user);
        };    
    } catch(err){
        res.status(400).send("something went wrong")
    };

});
app.get("/feed",async(req,res) =>{

    try {
        const user = await User.find({});
        res.send(user);
    } catch(err){
        res.status(400).send("something went wrong")
    };

});
app.delete("/user",async(req,res) =>{

    const userId = req.body.userId;
    try {
        const user = await User.findByIdAndUpdate(userId);
        if(user.length===0){
            res.status(400).send("user not found");
        }else{
            res.send("deleted");
        };    
    } catch(err){
        res.status(400).send("something went wrong")
    };

});
app.patch("/user",async(req,res) =>{

    const userId = req.body.userId;
    try {
        const user = await User.findByIdAndUpdate(userId,{lastName:"yashwanth"},{returnDocument:"after"});
        console.log(user);
        if(user.length===0){
            res.status(400).send("user not found");
        }else{
            res.send("updated");
        };    
    } catch(err){
        res.status(400).send("something went wrong")
    };

});





 connectDB()
 .then(()=>{
     console.log("Database connection established...");
     app.listen(7777,() => {
        console.log("i am listening port no 7777");
    });
 })
 .catch((err)=>{
     console.log("Database connection not established");
   
 });





















/*app.get("/getUserData",(req,res) => {
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
});*/

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

