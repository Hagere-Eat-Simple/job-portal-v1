const User = require('../models/user')
const jwt = require('jsonwebtoken')
const adminauth = async (req,res,next)=>{
    try{
        const token = req.header('Authorization').replace('Bearer ' , "")
        const decoded = jwt.verify(token , 'fightlikeurthethirdmonkey')
        const user = await User.findOne({_id:decoded._id , 'tokens.token':token , role:'admin'})
        
        if(!user){
            throw new Error('')
        }
        req.token = token
        req.user = user
        next()
    }catch(e){
        console.log(e)
        res.status(401).send({error : "unAuthorized"})
    }
}



module.exports = adminauth