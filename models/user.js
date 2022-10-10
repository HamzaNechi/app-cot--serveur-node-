import mongoose from "mongoose";

const user=mongoose.Schema({
    username:{
        type:String,
        unique:true,
        required:true
    },
    password:String,
    wallet:Number
},{
    timestamp:true
})

export default mongoose.model('user',user)