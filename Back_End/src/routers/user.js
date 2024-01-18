const express = require('express')
const User = require('../models/user') 

const auth = require('../middleware/auth')
const adminauth = require('../middleware/adminauth')
const sendEmail = require("../helper/mail")

const router = new express.Router()
const upload = require('../middleware/upload')
const pdf = require('../middleware/pdf')

router.post("/users/me/avatar",auth,upload.single('avatar') , async(req,res)=>{
        console.log(req.file)
        req.user.avatar = req.file.buffer
        await req.user.save()
        res.status(200).send()
}, (error , req , res , next)=>{ge
    res.status(500).send({error:error.message})
})
router.delete("/users/me/avatar" , auth , async (req , res)=>{
        req.user.avatar = undefined
        await req.user.save()
        res.status(200).send()
})

router.get("/users/:id/avatar" , async (req ,res)=>{
        try{
            const user = await User.findById(req.params.id)
            if(!user || !user.avatar){
                throw new Error()
            }

            res.set('Content-Type' ,'image/jpg' )
            res.send(user.avatar)
        }catch(e){
            res.status(400).send()
        }
})

router.post("/users" , async (req , res)=>{
    const user = new User(req.body)
    try{
        await  user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({user , token})
    }catch(error){
        res.status(500).send(error.message)
    }    
})
router.post('/user/login' , async (req, res )=>{
    try{
        const user = await User.findByCredentias(req.body.email , req.body.password)
        const token = await user.generateAuthToken()
        res.send({user  , token})
    }catch(e){
        res.status(400).send(e.message)
    }
})
router.get('/users/me' , auth , async (req , res)=>{
    
    try{
        res.status(200).send(req.user)
    }catch(e){
        res.status(500).send(error.message)
    }
})
router.post('/user/logout' , auth , async (req , res)=>{
    try{
         
        req.user.tokens = req.user.tokens.filter((token)=>{
            console.log(token , req.token)
            return token.token !== req.token ;
        })
        await req.user.save()
        res.send()
    }catch(e){
        res.status(500).send()
    }
})
router.post('/user/logoutFromAll' , auth , async (req,res)=>{
    try{
        req.user.tokens = []
        await req.user.save()
        req.send()
    }catch(e){
        res.status(501).send()
    }
})
 
router.patch("/user/update",auth , async (req , res)=>{
    const update = ['name' , "age" ,"email", 'password' , 'isactive' , 'link' , 'phone' , "location" , "gender" , "profession" , "exp"]
    const updates = Object.keys(req.body)
    console.log(req.body)
    const isVal = updates.every((upd)=>{
            return update.includes(upd)
    })
    if(!isVal){
        return res.status(400).send({error:"invaid action"})
    }
    try{
        updates.forEach((update)=>{
            req.user[update] = req.body[update]
        })
        await req.user.save()
        if(!req.user){
            return res.status(404).send({error:"not found"})
        }
        res.status(200).send(req.user)
    }catch(e){
        res.status(500).send(e.message) 
    }
})
router.delete('/user/delete',auth , async (req,res)=>{
    try{
        const user = await User.findByIdAndDelete(req.user._id)
        res.status(200).send(user)
    }catch(e){
        res.status(500).send(e.message) 
    }
})
router.delete('/user/:id', async (req,res)=>{
    try{
        const user = await User.findByIdAndDelete({_id : req.params.id})
        if(!user){
            return res.status(404).send("not found")
        }
        res.status(200).send(user)
    }catch(e){
        res.status(500).send(e.message) 
    }
})  
// router.post('/applicants',auth , async (req,res)=>{
//     try{
//         const user = await User.find({_id : {$in : req.body.applicants}})
//         res.status(200).send(user)
//     }catch(e){
//         res.status(500).send(e.message) 
//     }
// })
router.get('/Users', async (req, res )=>{
    try{
        const user = await User.find({role: "user" , isactive:"active"})
        res.send({user})
    }catch(e){
        res.status(400).send(e.message)
    }
})
router.get('/company',adminauth , async (req, res )=>{
    try{
        const active = !req.query.banned ? {$in : ['active' , 'pending']} : "banned" 
        const company = await User.find({role :'company' ,  isactive : active}).sort({ isactive: -1 })
        res.send({company})
    }catch(e){
        res.status(400).send(e.message)
    }
})
router.get('/company/banned' , async (req, res )=>{
    try{
        const company = await User.find({role: "company" , isactive:"banned"}) 
        res.send({company})
    }catch(e){
        res.status(400).send(e.message)
    }
})
router.patch('/user/ban/:id', adminauth , async (req,res)=>{
    try{
        const user = await User.findByIdAndUpdate({_id : req.params.id} , {isactive : "banned" })
        if(!user){
            return res.status(404).send("not found")
        }
        res.status(200).send(user)
    }catch(e){
        res.status(500).send(e.message) 
    }
})  
router.patch('/user/active/:id',adminauth, async (req,res)=>{
    try{
        const user = await User.findByIdAndUpdate({_id : req.params.id} , {isactive : "active"})
        if(!user){
            return res.status(404).send("not found")
        }
        res.status(200).send(user)
    }catch(e){
        res.status(500).send(e.message) 
    }
}) 

router.post("/users/me/cv",auth,pdf.single('pdf') , async(req,res)=>{
    console.log(req.file.buffer)
    req.user.cv = req.file.buffer
    await req.user.save()
    res.status(200).send()
}, (error , req , res , next)=>{
res.status(500).send({error:error.message})
})


router.delete("/users/me/cv" , auth , async (req , res)=>{
    req.user.cv = undefined
    await req.user.save()
    res.status(200).send()
})


router.get("/users/:id/cv" , async (req ,res)=>{
    try{
        const user = await User.findById(req.params.id)
        if(!user || !user.cv){
            throw new Error()
        }

        res.set('Content-Type' ,'application/pdf' )
        res.send(user.cv)
    }catch(e){
        res.status(400).send()
    }
})
// router.post("/sendemail" , async(req , res) =>{
//     const {email} = req.body 
//     const data = { 
//        ...req.body.data ,
//        email
//     } 
//     console.log(email , data)
//     await sendEmail(data)
//     res.status(200).send("success")
// } )
// update 
 
module.exports = router