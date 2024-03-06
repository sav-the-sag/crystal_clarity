// dependencies
const { Schema } = require('mongoose');

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

module.exports = affirmationSchema;