const mongoose = require("mongoose")
const vaidator = require('validator') 
const  bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Task = require("./task")

const userSchima = new mongoose.Schema({
    avatar:{
        type:String
    },
    name : {
        type:String,
        required:true,
        trim:true  
    }, 
    lname:{
        type:String,
        trim:true  
    },
    email : {
        type:String,
        required:true ,
        unique:true,
        trim:true,
        lowercase:true,
        Validate(value){
            if (!vaidator.isEmail(value)){
                throw new Error("not email")
            }
        }
    },
    // role : {
    //     type:String ,
    //     required:true ,
    //     trim:true,
    //     lowercase:true,
    // },
    age : {
        type:Number,
        min: 20
    },
    password:{
        type:String,
        required:true,
        trim:true,
        minlenght:6
    },
    role:{
        type:String,
        required : true,
        trim:true,
        default : "user",
        lowercase:true,
    },
    exp : {
        type:Number,
        default:0
    },
    lnik:{
        type:String,
        trim:true    
    },
    localtion:{
        type:String,
        required:true,
        trim:true  
    },
    phone:{
        type:String,
        required:true,
        trim:true
    },
    gender:{
        type:String,
        trim:true
    },
    filedofs:{
        type:String,
        trim:true
    },
    education_level:{
        type:String,
        trim:true
    },
    proferssion:{
        type:String,
        trim:true
    },
    employedAt:{
        type:String,
        trim:true
    },
    job_title:{
        type:String,
        trim:true
    },
    recent_salary:{
        type:Number,
        trim:true
    },
    isactive:{
        type:String,
        required:true,
        default:"pending" 
    },
    avatar : {
        type : Buffer
    },
    cv:{
        type:Buffer
    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]
} , {timestamps : true})

userSchima.virtual('tasks' , {
    ref:'Task',
    localField:'_id',
    foreignField:'owner'
})

userSchima.methods.generateAuthToken = async function(){
          const token = jwt.sign({_id:this._id.toString()},'fightlikeurthethirdmonkey' )
          this.tokens = this.tokens.concat({token})
          await this.save()
          return token
}
userSchima.methods.toJSON =  function(){
    const userObject = this.toObject()
    
    delete userObject.password
    delete userObject.tokens
    delete userObject.avatar

    return userObject
}
userSchima.statics.findByCredentias = async (email , password)=>{
    
            const user = await User.findOne({
                email : email
            })
            if(!user){
                throw new Error("Unable to login")
            }
            const isMatch = await bcrypt.compare(password , user.password)
            if(!isMatch){
                throw new Error(" invalid email or password")
            }
            return user

}



userSchima.pre("save", async function(next){
            if(this.isModified('password')){
                this.password = await bcrypt.hash(this.password , 8)
            }
            next()
})

userSchima.pre('remove' , async function(next){
    await Task.deleteMany({owner:this._id})
    next()
})


const User = mongoose.model('User' , userSchima
)

module.exports = User