import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        match:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['entrepreneur', 'investor'],
        required: true
    }
},{
    timestamps: true
})

export default mongoose.model('user', userSchema)