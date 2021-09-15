// const { restart } = require('nodemon');
const mysql = require('mysql');
require('dotenv/config');

const db = mysql.createConnection({
      user: 'root',
      host: 'localhost',
      password: process.env.DB_PASSWORD,
      database: 'groupomania'
    })

exports.getAllPosts = (req, res, next)=>{
    let sql = "SELECT * FROM users";
    db.query(sql, async (err, results)=> {
        try{
            const allPosts = res.send(results)
        }catch{
            res.status(400).json({message: err});
        }
    })
}

exports.getPost = (req, res, next) => {
    const postId = req.params.id;
    const sql = `SELECT uploads.content, users.name, users.id
                 FROM uploads 
                 INNER JOIN users ON uploads.id = users.id
                 WHERE uploads.id = ${postId}`;
    db.query(sql, async (err, results)=> {
        try{
            const post =await res.send(results)
        }catch{
            res.status(400).json({message: err});
        }
    })
  }

  exports.createPost = (req, res, next) => {
    const sql = `INSERT INTO uploads (id, content, author)
                VALUES (3, newGif, 2)`;
    db.query(sql, async (err, results)=> {
        try{
            const post =await res.send(results)
            console.log('hi')
        }catch{
            res.status(400).json({message: err});
        }
    })
  }
  
