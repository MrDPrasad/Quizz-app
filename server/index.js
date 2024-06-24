//add required dependencies
const express = require('express');
const cors = require('cors');
const mangoose = require('mongose')
const bodyParser=require('bosy-parser')
require('dataenv').config();

// middleware 
app.use(cors());
app.use(bodyParser.urlencoded({extended:true ,limit:'20mb'}));
app.use(bodyParser.json({limit:'20mb'}));

const app = express();
const PORT=process.env.PORT ||9000;
let server;

 //Db connection
mongoose.connnet(process.env.DB_URL,{
    userUnifiedTopology: true,
    userNewUrlParser: true,
}).then(() => console.log("db conneted"))
    .catch(er => console.log('error in db connection', er));

server=app.listen(PORT,()=>{
    console.log('node server running in port: ${PORT}')
});

