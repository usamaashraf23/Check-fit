const path = require("path");
const express = require("express");
const multer = require("multer");

const app = express();
const PORT = 3000;


const storage = multer.diskStorage({
    destination : function(req,file,cb){
        return cb(null,"./upload_images");
    },
    filename : function(req,file,cb){
        return cb(null,`${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({storage});

app.use(express.urlencoded({extended:false}));

app.post('/upload',upload.single('fitnessImage'),(req,res)=>{
    return res.redirect('/');
})

app.listen(PORT,(req,res)=>{
    console.log(`Server is listening at port ${PORT}.`);
});
