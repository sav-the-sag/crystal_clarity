const typeDefs = `
    type User {
        _id: ID
        username: String
        email: String
        password: String
        bio: String
        savedAffirmations: [Affirmation]
    }

    type Affirmation {
        _id: ID
        message: String
    }

    type Auth {
        token: ID!
        user: User
    }

    input AffirmationInput {
        message: String
    }

    
`;

module.exports = typeDefs;