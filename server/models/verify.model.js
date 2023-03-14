const mongoose = require("mongoose");
const modelName = "Verify";

const VerifySchema = new mongoose.Schema(
    {
        code: {
            type: Number,
            required: true,
            lowercase: true,
        },
        expiresAt: {
            type: Date,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true
        },     
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model(modelName, VerifySchema);