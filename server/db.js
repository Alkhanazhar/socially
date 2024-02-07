const mongoose = require('mongoose')

module.exports.mongodbConnection = () => {
    try {
        mongoose.connect("mongodb://localhost:27017/oikos").then(() => {
            console.log("okios connection established successfully")
        })
    }
    catch (err) {
        console.log("error connecting")
    }
}