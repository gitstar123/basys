const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    tokens : [
        {
            token : {
                type : String,
                required: true
            }
        }
    ]
});

userSchema.pre('save', async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 12);
    }
    next();
});

userSchema.methods.generateAuthToken = async function(){
    try{
        let newToken = jwt.sign({_id : this._id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token : newToken});
        await this.save();
        return newToken;
    }catch(err){
        console.log(err);
    }
}

const userModel = mongoose.model('users', userSchema);

module.exports = userModel;

