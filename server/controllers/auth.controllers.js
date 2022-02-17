let user = {}
const bcrypt = require('bcrypt')

const getUserName = (req,res) => {
    res.status(200).json({success:true,data:user})
}


const postUserName = async(req,res) => {
    try{
        const salt = await bcrypt.genSalt() 
        const hashPassword = await bcrypt.hash(req.body.password, salt)
        // console.log(salt)
        // console.log(hashPassword)

        const user = { name: req.body.name, password: hashPassword}
        user.push(user)
        res.status(201).send()
    }catch{
        res.status(500).send()
    }
}

const postLogin = async(req,res) => {
    const user = user.find(user => user.name === req.body.name)
    if(user == null){
        return res.status(400).send('can not find user')
    } 
    try{//bcrypt compare against timing attacks
        if(await bcrypt.compare(req.body.password, user.password)){
            res.send('success')
        }else{
            res.send('Password does not match')
        }
    }catch{
        res.status(500).send()
    }
}


module.exports = {
    getUserName,
    postUserName,
    postLogin,
}