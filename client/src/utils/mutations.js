
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

mutation addUser($email: String!, $password: String!, $username: String!){
    addUser(email: $email, password: $password, username: $username){
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

mutation saveAffirmation($affirmationData: AffirmationInput!){
    saveAffirmation(affirmationData: $affirmationData){
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