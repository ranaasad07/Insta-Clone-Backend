const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    fullName: {
        type: String,
        required: true
    },
    Otp :{
        type:String,
        
    },
    isEmailVerified : {
        type: Boolean,
        default:false,
    }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = { User };
