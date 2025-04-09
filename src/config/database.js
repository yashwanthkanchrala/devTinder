const mongoose = require("mongoose");

const connectDB = async()=>{
    await mongoose.connect(
        "mongodb+srv://yashwanth24710:30359790@namastenode.qy7chj8.mongodb.net/devTinder"
    );
};
module.exports = connectDB;

