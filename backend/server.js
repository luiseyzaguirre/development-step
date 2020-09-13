const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const frameworRoutes = require('./routers/FrameworkRouter');
require('dotenv').config(); 

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const DB = process.env.DB;

mongoose.connect(DB,{useNewUrlParser:true, useCreateIndex:true});

const connection = mongoose.connection;
 
connection.once('open',()=>{
    console.log('Mongo database connectio successfuly')
});

app.use('/api',frameworRoutes);

app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`)
});
