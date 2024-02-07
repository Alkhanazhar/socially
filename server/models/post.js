const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, ref: "User"
    },
    likes: [{
        type: String,
    }],
    description: {
        type: String,
    },
    image: {
        type: String,
    },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }]
}, { timestamps: true })
const Post = mongoose.model("Post", postSchema);
module.exports = Post;