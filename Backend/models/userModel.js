import {Schema,model} from "mongoose";

const userSchema = Schema({
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
    },
    bio: String,
    startupDescription:{
         type:String,
         require:function(){
            this.role==="entrepreneur"
         }
        },
  fundingNeed: Number, // Entrepreneur
  pitchDeck: String, // Entrepreneur
  investmentInterests: [String], // Investor
  portfolioCompanies: [{ name: String, description: String }], // Investor
},{
    timestamps: true
})

export default model('user', userSchema)