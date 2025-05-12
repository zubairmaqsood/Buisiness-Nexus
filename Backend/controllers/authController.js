import bcrypt from 'bcrypt'
import userModel from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'

export const loginUser = async (req, res) => {
    const { email, password } = req.body
    try {
        if (!email || !password) return res.status(400).send({ message: "Email or password is required" })

        const user = await userModel.findOne({email})
        if (!user) return res.status(404).send({ message: "Email or password is incorrect" })

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) return res.status(400).send({ message: "Incorrect email or password" })

        const token = generateToken(user.email, user._id)
        res.status(200).send({ role: user.role, token })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

export const registerUser = async (req, res) => {
    const { name, email, password, role } = req.body
    try {
        if (!name || !email || !password || !role) return res.status(400).send({ message: "All fields are required" })
        const user = await userModel.findOne({email})
        if (user) return res.status(400).send({ message: "User already exists" })

        const hashedPassword = await bcrypt.hash(password, 12)
        const createdUser = await userModel.create({ name, email, password: hashedPassword, role })
        const token = generateToken(createdUser.email, createdUser._id)
        res.status(201).send({ role: createdUser.role, token })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}
