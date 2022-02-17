const express = require('express')
const router = express.Router()
// const bcrypt = require('bcrypt')

app.use(express.json())

const {
    getUserName,
    postUserName,
    postLogin
} = require('../contollers/auth.controllers')




router.get('/',getUserName)

router.post('/',postUserName)

router.post('/login',postLogin)

// router.post('/',(req,res) => {
//     const {name} = req.body
//     if(name){
//         return res.status(200).send(`Welcome ${name}`)
//     }
//     res.status(401).send("please provide credentials")
// })

module.exports = router