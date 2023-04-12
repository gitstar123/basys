const jwt = require('jsonwebtoken');
const userModel = require('../model/userSchema');

async function authenticate(req,res,next){
    try{
        const token = req.cookies.jwttoken;
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

        const user = await userModel.findOne({_id : verifyToken._id, "tokens.token" : token});

        if(!user){
            throw new Error("User not found");
        }

        req.token = token;
        req.user = user;
        req.userID = user._id;

        next();

    }catch(e){
        res.status(401).json({"Message" : "Unauthorized : no token"});
        console.log(e);
    }
}

module.exports = authenticate;