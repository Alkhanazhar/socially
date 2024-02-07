const express = require('express');
const Comment = require('../models/Comment');
const router = express.Router()

router.post("/comments", async (req, res) => {
    const { userId, postId, comment } = req.body
    const newComment = await Comment.create({
        userId: userId, postId: postId, comment: comment
    })
    
    return res.json({ success: true, newComment })
})
module.exports = router