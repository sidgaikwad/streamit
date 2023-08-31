import mongoose, { Mongoose } from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Password is required"],  
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    isAdmin:{
        type: Boolean,
        default: false,
    },
    forgetPasswordToken: String,
    forgetPasswordTokenExpiry: Date,
    verifiedToken: String,
    verifiedTokenExpiry: Date,
    
})

const User = mongoose.models.users || Mongoose.model("users", userSchema);

export default User;