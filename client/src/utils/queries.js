import {gql} from '@apollo/client';
export const GET_AFFIRMATION =gql`
query affirmation {
affirmation {
    affirmationId: ID
    message: String
}
}`

export const GET_ME = gql`
  query me {
    me {
        _id
        username
        email
        intention
        savedAffirmations
    }
  }
`;
