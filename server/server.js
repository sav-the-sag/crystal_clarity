// dependencies
const express = require('express');
const path = require('path');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const { authMiddleware } = require('./utils/auth');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

// declare port
const PORT = process.env.PORT || 3001;

// declare server using ApolloServer constructor
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

// new instance of Apollo server with graphql schema
const startApolloServer = async () => {
    await server.start();

    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    
    // client-side requests starting with /graphql are handled by the apollo server
    app.use('/graphql', expressMiddleware(server, {
        context: authMiddleware
    }));

    // in production, client-side side bundle is delivered from dist/ folder
    if (process.env.NODE_ENV === 'production') {
        app.use(express.static(path.join(__dirname, '../client/dist')));

        app.get('*', (req,res) => {
            res.sendFile(path.join(__dirname, '../client/dist/index.html'));
        });
    }
}