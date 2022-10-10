import { Schema,model } from "mongoose";

const achatSchema=new Schema({
    boughtDate:{
        type:Date,
        default:new Date()
    },
    user : {
        type:Schema.Types.ObjectId,
        ref : 'user'
    },
    game :{
        type:Schema.Types.ObjectId,
        ref : 'Game'
    },
})


export default model('Achat',achatSchema);