import requestModel from "../models/requestModel.js"
import { ENTREPRENUER } from "../utils/constants.js"

export const createRequest = (req, res) => {
    const request = requestModel.create({
        investorId: req.user.id,
        entrepreneurId: req.params.id
    })
    res.send(201).send({ message: "Request created successfully" })
}

export const getRequest = async (req, res) => {
    if (req.user.role === ENTREPRENUER) {
        const request = await requestModel.find({ entrepreneurId: req.user.id })
        if (request.length === 0) return res.status(404).send({ message: "No Request Yet" })
        return res.status(200).send(request)
    }

    const request = await requestModel.find({ investorId: req.user.id })
    if (request.length === 0) return res.status(404).send({ message: "Not send any Request Yet"})
    return res.status(200).send(request)
}

export const updateRequestStatus = async(req, res) => {
    const {status} = req.body
    const updatedRequest = await requestModel.findOneAndUpdate({_id:req.params.id},status,{new:true,runValidators:true})

    if(!updatedRequest) return res.status(404).send({message:"Request not found"})
    
    return res.status(200).send({message:"Request updated Succesfully"})

}