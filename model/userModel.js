import mongoose from 'mongoose'

export const userSchema = new mongoose.Schema({
    username: {
        type:String,
        required:true,
        unique:[true,"Please Provide a username"]
    },
    password :{
        type:String,
        required:[false,"Please Provide a startup"],
        unique:false
    },
    email:{
        type:String,
        required:[true,"Please Provide an Email"],
        unique:true
    },
    firstName:{
        type:String,
        required:[false,"Please provide your firstName"],
        
    },
    lastName:{
        type:String,
        required:[false,"Please provide your lastName"]
    },
    mobile:{
        type:String,
        required:[false,"Please provide your mobile number"]
    },
    address:{
        type:String,
        required:[false,"Please provide your address"]
    },
    profile:{
        type:String,
        required:[false,"Please add your profile"]
    }
})

export default mongoose.model('User',userSchema)