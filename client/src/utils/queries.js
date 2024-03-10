import {gql} from '@apollo/client';
export const GET_AFFIRMATION =gql`
query affirmation {
affirmation {
    affirmationId: ID
    message: String
}
}`
