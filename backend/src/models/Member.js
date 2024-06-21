const {Schema, model} = require('mongoose');

const memberSchema = new Schema({
    fullName: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: false,
        trim: true,
        unique: false
    },
    phoneNumber: {
        type: String,
        required: false,
        trim: true,
        unique: true
    },
    company: {
        type: String,
        required: false,
        trim: true,
        unique: false
    },
    website: {
        type: String,
        required: false,
        trim: true,
        unique: false
    }
}, {
    timestamps: true
})

module.exports = model('member', memberSchema);