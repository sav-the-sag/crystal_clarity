const { AuthenticationError } = require('@apollo/server');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
      // retrieve the logged in user from the context and find the user details in the database
      me: async (parent, args, context) => {
        if (context.user) {
          return User.findOne({ _id: context.user._id });
        }
        throw new AuthenticationError('You need to be logged in!');
      },
    },
}

module.exports = resolvers;