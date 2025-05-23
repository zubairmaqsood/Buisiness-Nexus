import {Schema,model} from "mongoose";

const requestSchema = Schema({
    investorId: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required:true
    },
    entrepreneurId: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required:true
    },
    status:{
        type:String,
        enum:["pending","accepted","rejected"],
        default:"pending",
        required:true
    }
})

export default model("request", requestSchema)