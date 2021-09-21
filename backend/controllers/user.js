const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mysql = require('mysql');
require('dotenv/config');

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: process.env.DB_PASSWORD,
    database: 'groupomania'
  })
    
exports.signup =  (req, res, next) =>{
    const password = req.body.password;
    const name = req.body.name;
    const email = req.body.email;
    bcrypt.hash(password, 10, (err, hash)=>{
        const sql = `INSERT INTO users (name, email, password)
                    VALUES ('${name}', '${email}', '${hash}')`
        db.query(sql, async (err, results)=>{
            try{
                const post =await res.status(200).json({message: 'signed up successfully'})
            }catch{
                res.status(400).json({message: err});
            }
        })
    }) 
}


  exports.login = async(req, res, next) =>{
    const password = req.body.password;
    const email = req.body.email;
    const sql = `SELECT id, email, password
                 FROM users
                 WHERE email = '${email}'`;
    try{
        db.query(sql, async (err, results)=>{
            try{
                 const post = await (results);

                 if(results.length > 0){
                    const comparison = await bcrypt.compare(password, results[0].password);

                    if(comparison){
                        res.status(200).json({message: 'login successful', userId : results[0].id})
                    }else{
                       res.status(200).json({message: 'email and password do not match'})
                    }
                 }else{
                    res.status(206).json({message: 'email does not exist'})
                 }
                
            }catch{
                res.status(400).json({message: err});
            } 
        })
    }catch{
        res.status(400).json({message: err});
    }
     
  }
  // exports.login = (req, res, next) => {
  //   User.findOne({ email: req.body.email }).then(
  //     (user) => {
  //       if (!user) {
  //         return res.status(401).json({
  //           error: new Error('User not found!')
  //         });
  //       }
  //       bcrypt.compare(req.body.password, user.password).then(
  //         (valid) => {
  //           if (!valid) {
  //             return res.status(401).json({
  //               error: new Error('Incorrect password!')
  //             });
  //           }
  //           const token = jwt.sign(
  //             { userId: user._id },
  //             'RANDOM_TOKEN_SECRET',
  //             { expiresIn: '24h' });
  //           res.status(200).json({
  //             userId: user._id,
  //             token: token
  //           });
  //         }
  //       ).catch(
  //         (error) => {
  //           res.status(500).json({
  //             error: error
  //           });
  //         }
  //       );
  //     }
  //   ).catch(
  //     (error) => {
  //       res.status(500).json({
  //         error: error
  //       });
  //     }
  //   );
  // }