// dependencies
const { Schema } = require('mongoose');

const affirmationSchema = new Schema({
    message: {
        type: String,
        required: true,
    },
});

module.exports = affirmationSchema;