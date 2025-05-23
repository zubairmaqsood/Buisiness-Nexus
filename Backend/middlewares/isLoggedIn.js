import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

 const isLoggedIn = async(req,res,next) => {
    const headerValue = req.header("Authorization")
    const token = headerValue?.split(" ")?.[1]
    if (!token) return res.status(401).send({ message: "Unauthorized" })
    const decodedToken = jwt.verify(token, process.env.JWT_KEY)
    const user = userModel.findById(decodedToken.id)
    if (!user) return res.status(401).send({ message: "Unauthorized" })
    req.user = user
    next() 
}

export default isLoggedIn
