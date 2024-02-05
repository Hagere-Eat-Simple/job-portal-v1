// Importing the User model and the jwt library
const User = require('../models/user')
const jwt = require('jsonwebtoken')

/**
 * Middleware for admin authentication
 * @param {object} req - The request object
 * @param {object} res - The response object
 * @param {function} next - The next middleware function
 */
const adminauth = async (req,res,next)=>{
    try{
        // Extracting the token from the request header
        const token = req.header('Authorization').replace('Bearer ' , "")
        // Verifying the token using the secret key
        const decoded = jwt.verify(token , 'fightlikeurthethirdmonkey')
        // Finding the user based on the decoded token and role
        const user = await User.findOne({_id:decoded._id , 'tokens.token':token , role:'admin'})
        
        if(!user){
            // If user is not found, throw an error
            throw new Error('')
        }
        // Setting token and user in the request object
        req.token = token
        req.user = user
        next()
    }catch(e){
        // Handling authentication errors
        console.log(e)
        res.status(401).send({error : "unAuthorized"})
    }
}

module.exports = adminauth