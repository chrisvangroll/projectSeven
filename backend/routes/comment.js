const express = require('express');
const router = express.Router();
const commentCtrl = require('../controllers/comment');

router.post('/', commentCtrl.createComment);

router.get('/', commentCtrl.getComments)

router.delete('/', commentCtrl.deleteComment);

router.put('/', commentCtrl.updateComment);

router.post('/likes', commentCtrl.likeComment);

module.exports = router;