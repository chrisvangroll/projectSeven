const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');


const mysql = require('mysql');

require('dotenv/config');

const db = mysql.createConnection({
      user: 'root',
      host: 'localhost',
      password: process.env.DB_PASSWORD,
      database: 'groupomania'
    })

db.connect((err)=>{
    //err ? console.log(err) : console.log('connected to mysql DB');
    if(err){throw err};
    const sql = `INSERT INTO uploads (id, content, author)
                VALUES (3, newGif, 2)`;
    db.query(sql, async (err, results)=> {
        try{
            const post =await console.log(results)
        }catch{
            res.status(400).json({message: err});
        }
    })

})
    
//middleware
app.use(cors());

app.use(bodyParser.json());
const forumRoutes = require('./routes/forum')
const userRoutes = require('./routes/user');


app.use('/forum', forumRoutes);

// app.use('/auth', userRoutes);





module.exports = app;