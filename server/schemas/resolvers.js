const { AuthenticationError } = require('@apollo/server');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        // retrieve the Affirmations by using Affirmation.findOne()
        affirmation: async () => {
            return Affirmation.findOne();
        },
        // retrieve the logged in user from the context and find the user details in the database
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id });
            }
            throw new AuthenticationError('You need to be logged in!');
        },
    },
    Mutation: {
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('No user with this email found!');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect password!');
            }

            const token = signToken(user);
            return { token, user };
        },

        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);

            return { token, user };
        },

        removeUser: async (parent, args, context) => {
            if (context.user) {
                return User.findOneAndDelete({ _id: context.user._id });
            }
            throw AuthenticationError;
        },

        saveAffirmation: async (parent, { affirmationData }, context) => {
            if (context.user) {
                const newUserInfo = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { savedAffirmations: affirmationData } },
                    { new: true }
                );

                return newUserInfo;
            }

            throw AuthenticationError;
        },
        removeAffirmation: async (parent, { affirmationId }, context) => {
            if (context.user) {
                const newUserInfo = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { savedAffirmations: { affirmationId } } },
                    { new: true }
                );

                return newUserInfo;
            }

            throw AuthenticationError;
        },

        updateInt: async (parent, {intention}, context) => {
            if (context.user) {
                const newUserInfo = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { intention : intention },
                    { new : true }
                );

                return newUserInfo;
            }
        }
    }
}

module.exports = resolvers;