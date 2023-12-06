
const mongoose = require('mongoose');
const conn=mongoose.createConnection('mongodb://localhost:27017/awss3').on('open',()=>{
    console.log("Mongodb Connected");
}).on('error',()=>{
    console.log("Mongodb error");
});


