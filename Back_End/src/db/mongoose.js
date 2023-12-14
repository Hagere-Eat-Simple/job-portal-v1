const mongoose = require("mongoose")
 
const { paths } = require("../helper/documentation")
require("dotenv").config()

const Url = process.env.MONGOURL
 
mongoose.connect(Url , {useNewUrlParser : true  })



 
