const multer = require('multer')

const upload = multer({
    limits:{
        fileSize : 2000000
      },
    fileFilter:function(req , file , callback){
        if(!file.originalname.match(/\.(png|jpeg|jpg)$/)){
               return callback(new Error('upload an image'))
        }
            console.log("news")
            callback(null , true)
        }
})
module.exports = upload;
