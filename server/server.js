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
    
}