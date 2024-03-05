//dependencies
const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const affirmationSchema = require('./Affirmation');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
    },
    bio: {
        type: String,
        required: false,
    },
    savedAffirmations: [affirmationSchema],
});


const User = model('User', userSchema);

module.exports = User