import mongoose, {Schema} from 'mongoose';

const emailSchema = new Schema({
recieverEmail:{
 type: String,
 required: true,
},
recieverName:{
    type: String,
    required: true,
   },
senderEmail:{
    type: String,
},
senderName:{
    type: String,
   },
message: {
    type: String,
    required: true,
},
},{
    timestamps:true
})



export const Email = mongoose.model("Email",emailSchema);