import {gql} from '@apollo/client';
export const GET_AFFIRMATION =gql`
query getAffirmation {
affirmation {
    affirmationId: ID
    message: String
}
}`
