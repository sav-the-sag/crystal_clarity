// dependency
const mongoose = require('mongoose');

// wrap local connection to mongoDB in mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/cc-db');

// export connection
module.exports = mongoose.connection;