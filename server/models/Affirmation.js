// dependencies
const { Schema, model } = require('mongoose');

const affirmationSchema = new Schema({
    affirmationId: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
});

const Affirmation = model('Affirmation', affirmationSchema)

module.exports = {Affirmation, affirmationSchema};