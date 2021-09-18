const express = require('express');
const router = express.Router();
const forumCtrl = require('../controllers/forum');




  router.post('/', forumCtrl.createPost);

  router.get('/', forumCtrl.getAllPosts);

  router.post('/:id', forumCtrl.likePost);

  router.get('/:id', forumCtrl.getPost);

  router.put('/:id', forumCtrl.updatePost);

  router.delete('/:id', forumCtrl.deletePost);



module.exports = router;