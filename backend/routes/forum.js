const express = require('express');
const router = express.Router();
const forumCtrl = require('../controllers/forum');




  router.post('/create', forumCtrl.createPost);

  router.get('/', forumCtrl.getAllPosts);

  router.post('/:id', forumCtrl.likePost);

  router.get('/:id', forumCtrl.getPost);

  // router.post('/comment/:id', forumCtrl.createComment);

  router.put('/:id', forumCtrl.updatePost);

  router.delete('/:id', forumCtrl.deletePost);



module.exports = router;