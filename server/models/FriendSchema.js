const mongoose = require('mongoose')

const friendSchema = new mongoose.Schema({
    requestTo: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    requestFrom: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    requestStatus: {
        type: String, default: "pending"
    }
}, { timestamps: true })
const FriendSchema = mongoose.model('FriendSchema', friendSchema)
module.exports = FriendSchema