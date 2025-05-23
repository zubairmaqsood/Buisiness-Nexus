import express from 'express';
const server = express();
const port = 3000;
import cors from 'cors';
import "dotenv/config"
import "./config/mongodbConnection.js";
import authRouter from './routes/authRouter.js'
import profileRouter from "./routes/profileRouter.js"
import requestRouter from "./routes/requestRouter.js"

server.use(cors({
    origin:"http://localhost:5173"
}))

server.use(express.json())

//for authentication api's
server.use("/api/auth",authRouter)

//for profile related api's
server.use("/api",profileRouter)

//for request related api's
server.use("/api/request",requestRouter)



server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})