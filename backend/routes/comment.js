const express = require('express');
const router = express.Router();
const commentCtrl = require('../controllers/comment');



router.post('/', commentCtrl.createComment);

router.post('/likes', commentCtrl.likeComment);

router.get('/likes/:id', commentCtrl.getCommentLikes);

router.get('/:id', commentCtrl.getComments)

router.delete('/', commentCtrl.deleteComment);

router.put('/', commentCtrl.updateComment);

// router.post('/', commentCtrl.likeComment);

// router.get('/likes/:id', commentCtrl.getCommentLikes);





module.exports = router;