const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/Member')

const registerUser = asyncHandler(async (req, res) => {
    const { fullName, email, password } = req.body

    if (!fullName || !email || !password) {
        res.status(400)
        throw new Error('All fields are mandatory')
    }

    const userExists = await User.findOne({ email })
    if (userExists) {
        res.status(400)
        throw new Error('User exists')
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({ fullName, email, password: hashedPassword })
    if (user) {
        res.status(201).json({ _id: user.id, name: user.fullName, email: user.email, token: generateJWTtoken(user._id) })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })

    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({ _id: user.id, fullName: user.fullName, email: user.email, token: generateJWTtoken(user._id) })
    } else {
        res.status(400)
        throw new Error('invalid data')
    }
})

const getCurrentUser = asyncHandler(async (req, res) => {
    const { _id, fullName, email } = await User.findById(req.user.id)
    res.status(200).json({ id: _id, fullName, email })
})

const updateUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user.id)
    if (!user) {
        res.status(401)
        throw new Error('No such user found')
    }

    const updateData = await User.findByIdAndUpdate(req.user.id, req.body, { new: true })
    res.status(200).json(updateData)
})

const generateJWTtoken = id => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '5d' })

module.exports = { registerUser, loginUser, getCurrentUser, updateUser }