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

    type Query {
        me: User
        affirmation: Affirmation
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!, bio: String): Auth
        removeUser: User
        saveAffirmation(affirmationData: AffirmationInput!): User
        removeAffirmation(message: String!): User
        updateBio(bio: String!): User
    }

`;

module.exports = typeDefs;