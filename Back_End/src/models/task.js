const mongoose = require("mongoose")

const taskSchima = new mongoose.Schema({
    company_name:{
            type:String,
    },
    link :{
        type : String
    },
    desc : {
        type:String,
        // required : true ,
        // minLength : 50
    },
    isactive : {
        type:Boolean,
        // required:true
    },
    owner:{
        type : mongoose.Schema.Types.ObjectId,
        // required : true,
        ref:'User'
    },
    job_location:{
        type:String,
    },
    job_title:{
        type : String, 
    },
    profession:{
        type : String, 
    },
    salary:{ 
        type : String, 
    },
    exp : {
        type:Number,
        default:0
    },
    location : {
        type:Number,
        default:0
    },
    date:{
        type : String
    },
    
    applicants:[{
        id:{
            type : mongoose.Schema.Types.ObjectId,
            required:true
        },
        resume:{
            type:String
        }
    }]
}
)
taskSchima.methods.addapplicants = async function(id){
    this.applicants = this.applicants.concat({id:id})
    await this.save()

}

const Task  = mongoose.model('Task' ,  taskSchima)

module.exports = Task