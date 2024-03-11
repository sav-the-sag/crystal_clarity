import {gql} from '@apollo/client';
export const GET_AFFIRMATION =gql`
query affirmation {
affirmation {
    affirmationId
    message
}
}`

export const GET_ME = gql`
   {
    me {
        _id
        username
        email
        intention
        savedAffirmations {
          affirmationId
          message
        }
    }
  }
`;
