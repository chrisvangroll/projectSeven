const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const helmet=require('helmet');
require('dotenv/config');

const db = mysql.createConnection({
      user: 'root',
      host: 'localhost',
      password: process.env.DB_PASSWORD,
      database: 'groupomania'
    })

db.connect((err)=>{
    if(err){
        throw err;
    }
    else{
        console.log('connected to DB')
    }
   
    })

    
//middleware
app.use(cors());

app.use(helmet());

app.use(bodyParser.json());
const forumRoutes = require('./routes/forum');
const userRoutes = require('./routes/user');
const commentRoutes = require('./routes/comment');


app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/forum', forumRoutes);

app.use('/comment', commentRoutes);

app.use('/auth', userRoutes);





module.exports = app;