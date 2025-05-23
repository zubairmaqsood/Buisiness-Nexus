import jwt from "jsonwebtoken";

const generateToken = (email,id,role) => {
    const token = jwt.sign(
        { email, id,role},
        process.env.JWT_KEY,
        {expiresIn:process.env.JWT_EXPIRES_IN}
    )
    return token
}

export default generateToken;