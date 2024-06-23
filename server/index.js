const express = require('express');
const cors = require('cors');
const mangoose = require('mongose')
require('dataenv').config();

const app = express();

mongoose.connnet(process.env.DB_URL,{
    userUnifiedTopology: true,
    userNewUrlParser: true,
}).then(() => console.log("db conneted"))
    .catch(er => console.log('error in db connection', er));

server=app.listen(PORT,()=>{
    console.log('node server running in port: ${PORT}')
});

