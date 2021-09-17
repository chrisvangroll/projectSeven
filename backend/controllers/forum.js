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

exports.deletePost = (req, res, next) => {
    const postId = req.params.id;
    const sql =    `DELETE from uploads
                    WHERE id = ${postId}`
    db.query(sql, (err, results)=> {
        if(!err){
            res.send('deleted 4');
        }
        else{
            console.log(err);
        }
    }
    )}


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
    // ??
    //const userId = id stored in local storage
    // https://javascript.plainenglish.io/libraries-for-using-localstorage-in-your-node-js-project-3ff5ac1a3512
    const sql = `INSERT INTO uploads (content, author)
                VALUES ('newGif', '2')`;
    db.query(sql, async (err, results)=> {
        try{
            const post =await res.send('posted 2')
        }catch{
            res.status(400).json({message: err});
        }
    })
  }

  exports.likePost = (req, res, next) => {
    const postId = req.params.id;
    // ??
    //const userId = id stored in local storage
    // https://javascript.plainenglish.io/libraries-for-using-localstorage-in-your-node-js-project-3ff5ac1a3512
    const sql = `INSERT INTO likes (idUser, idUpload, liked)
                VALUES ('1', ${postId}, '1')`;
    db.query(sql, async (err, results)=> {
        try{
            const post =await res.send('liked 9')
        }catch{
            res.status(400).json({message: err});
        }
    })
  }


  exports.updatePost = (req, res, next) => {
    const postId = req.params.id;
    const sql = `UPDATE uploads
                 SET content = 'updated Gif'
                 WHERE uploads.id = ${postId}`;
    db.query(sql, async (err, results)=> {
        try{
            const post =await res.send('post updated')
        }catch{
            res.status(400).json({message: err});
        }
    })
  }

  
