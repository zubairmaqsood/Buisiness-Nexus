 import { ENTREPRENUER } from "../utils/constants.js"
 
 const isEntreprenuer = (req,res,next) => {
    if (req.user.role !== ENTREPRENUER) return res.status(403).send({ message: "Forbidden" })
    next()
}

export default isEntreprenuer