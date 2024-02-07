const express = require('express');
const Post = require('../models/post');
const User=require("../models/User")
const router = express.Router()

router.post("/create-post", async (req, res) => {
    const { description, image, userId } = req.body;
    
    const post =await Post.create({
        description: description,
        image: image, userId: userId
    })

    return res.json({ success: true, post })
})
module.exports = router