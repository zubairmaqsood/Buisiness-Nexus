import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URI)
export default mongoose.connection