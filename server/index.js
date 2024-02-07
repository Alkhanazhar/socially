const express = require('express')
const app = express()
var bodyParser = require('body-parser');
app.use(bodyParser.json());
const cors = require('cors');
const morgan = require('morgan');
const helmet = require("helmet")
const userRoutes = require("./routes/userRoutes")
const postRoutes = require("./routes/postRoutes")
const commentRoutes = require("./routes/commentRoutes")
const { mongodbConnection } = require('./db')
app.use(morgan("dev"));
app.use(cors())
app.use(helmet())


app.use(bodyParser.urlencoded({ extended: true }));
//routes

app.use(userRoutes)
app.use(postRoutes)
app.use(commentRoutes)
//db connection

mongodbConnection()

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})