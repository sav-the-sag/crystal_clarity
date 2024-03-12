
import {gql} from '@apollo/client';


export const LOGIN_USER = gql` 

mutation login($email: String!, $password: String!){
    login(email: $email, password: $password){
        token
        user{
            _id
            username
            email
            password
        }
    }
}`;

export const ADD_USER = gql`

mutation addUser($username: String!, $email: String!, $password: String!){
    addUser(username: $username, email: $email, password: $password){
        token
        user{
            _id
            username
            email
            password
        }
    }
}
`;


export const REMOVE_USER = gql`

mutation removeUser($email: String!, $password: String!){
    removeUser(email: $email, password: $password){
        user{
            _id
            username
            email
            password
        }
    }
}
`;


export const SAVE_AFFIRMATION = gql`

mutation saveAffirmation($affirmationId: String!, $message: String!){
    saveAffirmation(affirmationId: $affirmationId, message: $message){
        _id
        username
        email
        intention
        savedAffirmations{
            affirmationId
            message
        }
    }
}`;


export const REMOVE_AFFIRMATION = gql` 
mutation removeAffirmation($affirmationId: ID!){
    removeAffirmation(affirmationId: $affirmationId){
        _id
        username
        email
        intention
        savedAffirmations{
            affirmationId
            message
        }
    }

}`;


export const UPDATE_INT = gql` 
mutation updateInt($intention: String!){
    updateInt(intention: $intention){
        _id
        username
        email
        intention
        savedAffirmations{
            affirmationId
            message
        }
    }

}`;