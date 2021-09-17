const mysql = require('mysql');
require('dotenv/config');

const db = mysql.createConnection({
      user: 'root',
      host: 'localhost',
      password: process.env.DB_PASSWORD,
      database: 'groupomania'
    })

exports.createComment = (req, res, next) => {
    const postId = req.params.id;
    
    const sql = `INSERT INTO comments (commenter, uploadId, comment)
                VALUES ('2', ${postId}, 'test comment 2')`;
    db.query(sql, async (err, results)=> {
        try{
            const post =await res.send('comment')
        }catch{
            res.status(400).json({message: err});
        }
    })
  }

  exports.deleteComment = (req, res, next) => {
    const commentId = req.params.id;
    const sql =    `DELETE from comments
                    WHERE id = ${commentId}`
    db.query(sql, (err, results)=> {
        if(!err){
            res.send('Comment Deleted');
        }
        else{
            console.log(err);
        }
    }
    )}

    exports.updateComment = (req, res, next) => {
        const commentId = req.params.id;
        const sql = `UPDATE comments
                     SET comment = 'updated comment'
                     WHERE comments.id = ${commentId}`;
        db.query(sql, async (err, results)=> {
            try{
                const post =await res.send('comment updated1')
            }catch{
                res.status(400).json({message: err});
            }
        })
      }

      exports.likeComment = (req, res, next) => {
        // const commentId = req.params.id;
        // const userId = req.body.id;
        const commentId = req.params.id;
        const userId = 1;
        const sql = `INSERT INTO comment_likes (userId, commentId, liked)
                    VALUES (${userId}, ${commentId}, '1')`;
        db.query(sql, async (err, results)=> {
            try{
                const post =await res.send('liked2')
            }catch{
                res.status(400).json({message: err});
            }
        })
      }
    