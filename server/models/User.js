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

//password hashing using bcrypt
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

//method to compare and validate password on login
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User