const express = require('express');
const router = express.Router();
const forumCtrl = require('../controllers/forum');
const multer = require('../middleware/multer-config');




  router.post('/', multer, forumCtrl.createPost);

  router.get('/', forumCtrl.getAllPosts);

  router.get('/admin', forumCtrl.getAdmin);

  router.post('/likes', forumCtrl.likePost);

  router.get('/likes/:id', forumCtrl.getLikes);

  router.get('/:id/post', forumCtrl.getPost);

  router.put('/:id', multer, forumCtrl.updatePost);

  router.delete('/:id', forumCtrl.deletePost);



module.exports = router;