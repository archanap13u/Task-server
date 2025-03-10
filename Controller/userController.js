const users = require('../Model/userModel')
const jwt=require('jsonwebtoken')


exports.userRegistration = async (req, res) => {
    try {
        const { username, email, phone, password } = req.body
        if (!username || !email || !phone || !password) {
            res.status(406).json("Invalid inputs")
        }
        else {
            const existingEmail = await users.findOne({ email })
            if (existingEmail) {
                res.status(406).json("Email is already used")
            }
            else {
                const newUser = new users({ username, email, phone, password })
                await newUser.save()
                res.status(201).json(newUser)
            }

        }
    }
    catch (err) {
        console.log(err)
        res.status(400).json(err)
    }

}

exports.userLogin = async (req, res) => {
    try {
        const { email, password } = req.body
        const existingUser = await users.findOne({ email, password })
        if (existingUser) {
            const token=jwt.sign({userId:existingUser._id},process.env.SECRET_KEY)
            res.status(200).json({token,username:existingUser.username})
        }
        else {
            res.status(406).json("Invalid email/password")
        }
    }
    catch (err) {
        console.log(err)
        res.status(400).json(err)
    }

}