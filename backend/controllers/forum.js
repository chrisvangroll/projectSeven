// const { restart } = require('nodemon');
const mysql = require('mysql');
require('dotenv/config');
const fs = require('fs');


const db = mysql.createConnection({
      user: 'root',
      host: 'localhost',
      password: process.env.DB_PASSWORD,
      database: 'groupomania'
    })

exports.getAllPosts = (req, res, next)=>{
    let sql = "SELECT uploads.content, uploads.id, uploads.author, uploads.id, uploads.title, users.name FROM uploads INNER JOIN users ON uploads.author = users.id ";
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
    const sql = `SELECT *
                 FROM uploads 
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
   
    const author = req.body.author;
    //const content = req.body.content;
    const title = req.body.title;
    //const author = '2';
    // const content = 'working on multer2';
    //const title = 'multer3';
    const url = req.protocol + '://' + req.get('host');
    const content = url + '/images/' + req.file.filename;

    const sql = `INSERT INTO uploads (content, author, title)
                VALUES ('${content}', '${author}', '${title}')`;

    db.query(sql, async (err, results)=> {
        try{
            const post =await res.status(201).json({message: 'posted successfully3'})
        }catch{
            res.status(400).json({message: err});
        }
    })
  }

  exports.likePost = (req, res, next) => {
    const postId = req.body.uploadId;
    const userId = req.body.userId;
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

  exports.getLikes = (req, res, next)=>{

    let sql = `SELECT * FROM likes WHERE idUpload = '${req.params.id}'`;
    db.query(sql, async (err, results)=> {
        try{
            const allPosts = await res.status(200).json(results);
        }catch{
            res.status(400).json({message: err});
        }
    })
}

  
