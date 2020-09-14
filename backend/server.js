const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const frameworRoutes = require('./routes/FrameworkRoutes');
const tierRoutes = require('./routes/TierRoutes');
require('dotenv').config();
const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

const DB = process.env.DB;

mongoose.connect(DB,{useNewUrlParser:true, useCreateIndex:true});

const connection = mongoose.connection;
 
connection.once('open',()=>{
    console.log('Mongo database connection successfuly')
});

app.use('/api/framework',frameworRoutes);
app.use('/api/tier',tierRoutes);

app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`)
});
