const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

require('../db/connect');
const myModel = require('../model/schema');
const userModel = require('../model/userSchema');
const authenticate = require('../middlewares/authenticate');

router.get('/', (req, res) => {
    res.send("Hello World!")
})

router.post('/store', async(req, res) => {
    const {CPT, Diagnosis, Price, Units} = req.body;
    if(!CPT || !Diagnosis || !Price || !Units){
        return res.status(422).json({message : "All fields were not filled"});
    }

    try{
        const response = await myModel.findOne({CPT : CPT});
        
        if(response){
            return res.status(422).json({"Message": "This CPT already exists in our db."});
        }

        const m = myModel(req.body);
        await m.save();
        
        return res.status(201).send("Seccessfully Stored")
    }catch(err){
        console.log(err);
    }
})

{ /* Store into database using promises
router.post('/store', (req, res) =>{
    //req.body
    // console.log(req.body.CPT);
    const {CPT, Diagnosis, Price, Units} = req.body;
    if(!CPT || !Diagnosis || !Price || !Units){
        return res.status(422).json({"Error" : "All fields are required"})
    }

    myModel.findOne({CPT : CPT}).then((e) => {
        if(e){
            return res.status(422).json({"error" : "CPT Already exists"});
        }
        else{
            const m = new myModel({CPT, Diagnosis, Price, Units});

            m.save().then(() => {
                res.status(201).json({"Message" : "Data stored successfully"})
            }).catch((err) => {
                res.status(500).json({"Message" : "Failed to store into database"});
            })
        }
    }).catch(err => console.log(err));

    // const m = myModel(req.body);

    // m.save().then(() => {res.status(201).send("Data Stored into Database")}).catch(() => {res.status(422).send("Problem with the request")});
})
*/ }

router.post('/signup', async(req, res)=>{
    const {firstName, lastName, email, password} = req.body;
    if(!firstName || !lastName || !email || !password){
        return res.status(422).json({Message : "All fields must be filled."});
    }

    try{
        const response = await userModel.findOne({email : email});

        if(response){
            return res.status(422).json({Error : "User already exists"});
        }

        const m = userModel(req.body);

        await m.save();

        return res.status(201).send("Stored into the database");
    }
    catch(err){
        return res.status(422).send("Not stored because of some error.");
    }
})

router.post('/signin', async(req, res)=>{
    const user = req.body;

    if(!user.email || !user.password){
        return res.status(400).send("Fill the fields properly");
    }

    try{
        const response = await userModel.findOne({email : user.email});
        if(response){
            const isMatch = await bcrypt.compare(user.password, response.password);
            if(isMatch){
                const token = await response.generateAuthToken();
                console.log(token);
                res.cookie('jwttoken', token, {
                    expires: new Date(Date.now() + 2592000000),
                    httpOnly: true
                });
                return res.status(200).send("Login Successfully");
            }
        }
        return res.status(400).send("Invalid email and/or password")
    }catch(err){
        return res.status(422).send("error")
    }
})

router.get('/signin', (req, res)=> {
    res.send("Hello sign in ");
})

router.get('/aboutme', authenticate, (req, res) =>{
    res.send("About me");
})


router.get('/contact', (req, res) =>{
    res.send("Contact Me");
})

module.exports = router;