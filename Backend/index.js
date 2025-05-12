import express from 'express';
const server = express();
const port = 3000;
import cors from 'cors';
import "dotenv/config"
import "./config/mongodbConnection.js";
import authRouter from './routes/authRouter.js'

server.use(cors({
    origin:"http://localhost:5173"
}))

server.use(express.json())
server.use("/api/auth",authRouter)



server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})