const express = require('express');
const router = express.Router();
const commentCtrl = require('../controllers/comment');

router.post('/:id', commentCtrl.createComment);

router.get('/:id', commentCtrl.getComments)

router.delete('/:id', commentCtrl.deleteComment);

router.put('/:id', commentCtrl.updateComment);

router.post('/likes/:id', commentCtrl.likeComment);

module.exports = router;