import { useQuery, useMutation } from '@apollo/client';

import { GET_ME } from '../utils/queries'
import { REMOVE_USER } from '../utils/mutations';
import IntentionsCard from '../components/IntentionsCard'
import { Modal } from 'react-bootstrap';

import Auth from '../utils/auth';
import RemoveUser from '../components/RemoveUser'
import { useState } from 'react';

export default function Profile() {

  const { loading, data } = useQuery(GET_ME);

  const user = data?.me || {};
  const [showModal, setShowModal] = useState(false);

  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <h2>Welcome {user.username}!</h2>
      <button id="delete-button" onClick={() => setShowModal(true)}>
        Delete Profile
          </button>
      <div>
        <IntentionsCard intention={user.intention}/>
      </div>
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
      <Modal
            size='lg'
            show={showModal}
            onHide={() => setShowModal(false)}
            aria-labelledby='delete-modal'>
            <Modal.Body>
              <RemoveUser handleModalClose={() => setShowModal(false)} />
            </Modal.Body>
          </Modal>
    </div>
  );
}