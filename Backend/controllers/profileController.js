import bcrypt from "bcrypt"
import userModel from "../models/userModel.js"
import { ENTREPRENUER, INVESTOR } from "../utils/constants.js"

export const getProfile = async (req, res) => {
    const { password, ...rest } = req.user
    res.status(200).send(rest)
}

export const updateProfile = async (req, res) => {
    try {
        const { password, ...rest } = req.body
        if (password) {
            rest.password = await bcrypt.hash(password, 12)
        }

        //find user based on id and update given information. new true is for saving document after update in database and runValidaters is for check validations if applied any in schema
        const updatedUser = await userModel.findOneAndUpdate({ _id: req.user.id }, rest, { new: true, runValidators: true })

        if(!updatedUser) return res.status(404).send({message:"No user found"})

        res.status(200).send({ message: "User Updated Successfully" })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

export const getEntrepreneurProfile = async (req, res) => {
    const entrepreneursList = await userModel.find({ role: ENTREPRENUER }).select("-createdAt -updatedAt")
    if (entrepreneursList.length === 0) return res.status(404).send({ message: "No Entrepreneur found" })

    res.status(200).send(entrepreneursList)
}

export const getInvestorProfile =async (req, res) => {
    const investorsList = await userModel.find({ role: INVESTOR }).select("-createdAt -updatedAt")
    if (investorsList.length === 0) return res.status(404).send({ message: "No Investor found" })

    res.status(200).send(investorsList)
}