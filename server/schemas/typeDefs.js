const typeDefs = `
    type User {
        _id: ID
        username: String
        email: String
        password: String
        intention: String
        savedAffirmations: [Affirmation]
    }

    type Affirmation {
        affirmationId: ID
        message: String
    }

    type Auth {
        token: ID!
        user: User
    }

    input AffirmationInput {
        affirmationId: String!
        message: String!
    }

    type Query {
        me: User
        affirmation: Affirmation
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        removeUser: User
        saveAffirmation(affirmationData: AffirmationInput!): User
        removeAffirmation(affirmationId: ID!): User
        updateInt(intention: String!): User
    }

`;

module.exports = typeDefs;