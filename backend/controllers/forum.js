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
    let sql = "SELECT * FROM uploads";
    db.query(sql, async (err, results)=> {
        try{
            const allPosts = await res.status(200).json(results);
            
        }catch{
            res.status(400).json({message: err});
        }
    })
}



exports.deletePost = (req, res, next) => {
    const postId = req.params.id;
    const sql =    `DELETE from uploads
                    WHERE id = ${postId}`

    db.query(sql, async (err, results)=> {
        try{
            const post =await res.status(200).json({message: 'post deleted'});
        }catch{
            res.status(400).json({message: err});
        }
    }                
    )}


  exports.getPost = (req, res, next) => {
        const postId = req.params.id;
    const sql = `SELECT uploads.content, users.name, users.id
                 FROM uploads 
                 INNER JOIN users ON uploads.author = users.id
                 WHERE uploads.id = ${postId}`;
    db.query(sql, async (err, results)=> {
        try{
            const post =await res.status(200).json(results);
        }catch{
            res.status(400).json({message: err});
        }
    })
  }

  
  exports.createPost = (req, res, next) => {
   
    const userId = req.body.userId;
    const content = req.body.content;
    const sql = `INSERT INTO uploads (content, author)
                VALUES (${content}, ${userId})`;

    db.query(sql, async (err, results)=> {
        try{
            const post =await res.status(200).json({message: 'posted successfully'})
        }catch{
            res.status(400).json({message: err});
        }
    })
  }

  exports.likePost = (req, res, next) => {
    const postId = req.params.id;
    const userId = req.body.id;
    const sql = `INSERT INTO likes (idUser, idUpload, liked)
                VALUES (${userId}, ${postId}, '1')`;
    db.query(sql, async (err, results)=> {
        try{
            const post =await res.status(200).json({message: 'liked successfully'})
        }catch{
            res.status(400).json({message: err});
        }
    })
  }

  


  exports.updatePost = (req, res, next) => {
    const postId = req.params.id;
    const content = req.body.content;
    const sql = `UPDATE uploads
                 SET content = ${content};
                 WHERE uploads.id = ${postId}`;
    db.query(sql, async (err, results)=> {
        try{
            const post =await res.status(201).json({message: 'updated successfully'});
        }catch{
            res.status(400).json({message: err});
        }
    })
  }

  
