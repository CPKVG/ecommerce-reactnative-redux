const express = require("express");
const app = express()
const mongoose = require('mongoose')
const API_KEY = require('./config/mongo_config');
const UserModel = require("./model/auth.model");

const cors = require("cors")



mongoose.connect(API_KEY);

app.use(express.json());
app.use(cors());

app.get("/getUsers",(req,res)=>{
    UserModel.find({},(err,result)=>{
        if(err){
            res.json(err)
        }else{
            res.json(result)
        }
    })
})

app.post("/createUser", async(req,res)=>{
    const user = req.body
    const newUser = new UserModel(user);
    await newUser.save();

    res.json(user)

})


app.listen(3001, () => {
    console.log(API_KEY)
})

