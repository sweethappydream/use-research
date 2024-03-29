const mongoose = require("mongoose");
const modelName = "User";

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        job: {
            type: String,
            required: false,
        },
        phone: {
            type: Number,
            required: false,
            default: 0
        },
        company: {
            type: String,
            required: false,
        },
        business: {
            type: String,
            required: false
        },
        reason: {
            type: String,
            required: false
        },
        verifyCode: {
            type: Number,
            required: false 
        }        
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model(modelName, UserSchema);