import jwt from "jsonwebtoken";

const generateToken = (email,id) => {
    const token = jwt.sign(
        { email, id},
        process.env.JWT_KEY,
        {expiresIn:process.env.JWT_EXPIRES_IN}
    )
    return token
}

export default generateToken;