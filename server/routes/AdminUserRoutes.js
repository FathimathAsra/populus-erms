import express from 'express'
const AdminRouter = express.Router()
import { protect } from "../utilities/AdminAuthMidWare.js"
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import asyncHandler from 'express-async-handler';
import User from "../models/AdminUserModel.js"

AdminRouter.post('/', asyncHandler(async (req, res) => {
    const { adminname, email, password, position, phoneno, department, address, education, mstatus } = req.body

    if (!adminname || !email || !password || !position || !phoneno || !department || !address || !education || !mstatus) {
        res.status(400)
        throw new Error('Please add all fields')
    }

    const userExists = await User.findOne({ email })

    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
        adminname,
        email,
        password: hashedPassword,
        position,
        phoneno,
        department,
        address,
        education,
        mstatus,
    })

    if (user) {
        res.status(201).json({
            _id: user.id,
            adminname: user.adminname,
            position: user.position,
            address: user.address,
            phoneno: user.phoneno,
            department: user.department,
            education: user.education,
            mstatus: user.mstatus,
            email: user.email,
            profilepic: user.profilepic,
            token: generateToken(user._id),
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
}))


AdminRouter.post('/login', asyncHandler(async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            adminname: user.adminname,
            position: user.position,
            address: user.address,
            phoneno: user.phoneno,
            department: user.department,
            education: user.education,
            mstatus: user.mstatus,
            email: user.email,
            profilepic: user.profilepic,
            token: generateToken(user._id),
        })
    } else {
        res.status(400)
        throw new Error('Invalid credentials')
    }
}))

AdminRouter.get('/me', protect, asyncHandler(async (req, res) => {
    const user = await User.find(req.params.id)

    res.status(200).json(user)
}));


const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
};

export default AdminRouter