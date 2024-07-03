const {Schema, model} = require('mongoose');

const memberSchema = new Schema({
    fullName: {
        type: String,
        required: [true, 'name is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    phoneNumber: {
        type: String,
        trim: true,
        unique: true,
        sparse: true
    },
    company: {
        type: String,
        trim: true,
        unique: false
    },
    website: {
        type: String,
        trim: true,
        unique: false
    },
}, {
    timestamps: true
})

module.exports = model('member', memberSchema);