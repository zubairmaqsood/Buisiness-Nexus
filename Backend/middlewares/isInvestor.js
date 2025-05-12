 import { INVESTOR } from "../utils/constants"
 
 const isInvestor = (req,res,next) => {
    if (req.user.role !== INVESTOR) return res.status(403).send({ message: "Forbidden" })
    next()
}

export default isInvestor