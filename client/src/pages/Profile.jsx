import { useQuery, useMutation } from '@apollo/client';

import GET_ME from '../utils/queries'
import { REMOVE_USER } from '../utils/mutations';

import Auth from '../utils/auth';

export default function Profile() {

  const { loading, data } = useQuery(GET_ME);

  const user = data?.me || {};

  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <h2>Welcome {user.username}!</h2>
      <div>
      {user.savedAffirmations?.length
            ? `Your affirmations:`
            : 'You have no saved affirmations!'}
      </div>
      <div>
      {user.savedAffirmations?.length > 0 && (
        <AffirmationsList
          savedAffirmations={user.savedAffirmations}
          isLoggedInUser={true}
        />
      )}
      </div>
    </div>
  );
}