const AdminAuth = (res,req,next) =>{
    const token = "xyz";
    const isAdminAuthorized = token === "xyz";
    if (!isAdminAuthorized){
        res.status(401).send("unAuthorized Access");
    } else{
        next();
    }
};
const userAuth = (req,res,next) =>{
    const token = "xyz";
    const isAdminAuthorized = token === "xyz";
    if (!isAdminAuthorized){
        res.status(401).send("unAuthorized Access");
    } else{
        next();
    }
};
module.exports = {
    AdminAuth,
    userAuth,
}