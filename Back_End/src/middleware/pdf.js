const multer = require('multer')

const pdf = multer({
    limits:{
        fileSize : 1000000
      },
    fileFilter:function(req , file , callback){
        if(!file.originalname.match(/\.(pdf)$/)){
               return callback(new Error('upload a pdf'))
        }
            console.log("news")
            callback(null , true)
        }
})
module.exports = pdf;