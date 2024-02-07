const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    postId: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
    comment: { type: String, required: true },
  
    // replies: [
    //     {
    //         replyId: { type: mongoose.Schema.Types.ObjectId },
    //         userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    //         replyAt: { type: String },
    //         comment: { type: String },
    //         created_At: { type: Date, default: Date.now() },
    //         updated_At: { type: Date, default: Date.now() },
    //         likes: [{ type: String }],
    //     },
    // ]
    likes: [{ type: String }]

}, { timestamps: true })
const Comment = mongoose.model("Comment", commentSchema)
module.exports = Comment