const nodeMailer = require("nodemailer")
const { v4: uuidv4 } = require("uuid")
const dotenv = require("dotenv")
dotenv.config()

const transport = nodeMailer.createTransport()