import { useQuery, useMutation } from '@apollo/client';

import GET_ME from '../utils/queries'
import { REMOVE_AFFIRMATION, UPDATE_INT, REMOVE_USER } from '../utils/mutations';

import Auth from '../utils/auth';

export default function Profile() {
    return (
      <div>
        <h2>Profile Page</h2>
        <p>
         Profile page! 
        </p>
      </div>
    );
  }