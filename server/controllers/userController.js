const User = require("../models/User")
const bcrypt = require('bcrypt');
const JWT = require("jsonwebtoken");
require("dotenv").config()

module.exports.signUpController = async (req, res) => {
    try {
        const { username, email, password } = req.body
        if (!username || !password || !email) return res.json({ status: false, message: "fill all the required fields" })
        const user = await User.findOne({ email: email })
        if (user) return res.json({ status: false, message: "email already existed" })
        const hashedPassword = await bcrypt.hash(password, 10)
        await User.create({ username: username, email: email, password: hashedPassword })
        res.json({
            status: true,
            message: 'successfully signed up',
        })
    } catch (error) {
        res.json({ status: false, message: error.message })
        console.log(error.message)
    }
}
module.exports.signInController = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        const passwordMatch = await bcrypt.compare(password, user.password)
        if (!passwordMatch) {
            return res.json({ status: false, message: ' password mismatched' })
        }
        const token = JWT.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" })
        res.json({
            status: true,
            message: 'successfully signed in',
            user,
            token

        })

    } catch (error) {
        res.json({ status: false, error: error.message })
        console.log(error.message)
    }
}