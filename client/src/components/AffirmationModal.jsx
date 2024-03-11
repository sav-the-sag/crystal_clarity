// import dependencies
import { useQuery, useMutation } from '@apollo/client';
import { SAVE_AFFIRMATION } from "../utils/mutations";
import { GET_AFFIRMATION } from "../utils/queries";
import Auth from '../utils/auth'

const AffirmationModal = () => {
    const { loading, data } = useQuery(GET_AFFIRMATION);

    const affData = data?.affirmation || {};

    const [saveAffirmation, { error }] = useMutation(SAVE_AFFIRMATION);

    const handleSaveAffirmation = async (affirmationId, message) => {
        // get token
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
            return false;
        }
        try {
            const { data } = await saveAffirmation({
              variables: { affirmationData: affirmationId, message },
            });
          } 
          catch (err) {
            console.error(err);
          }
      
    }

    return (
        <div key={affData.affirmationId}>
            <h4>
                {affData.message}
            </h4>
            <button onClick={() => handleSaveAffirmation(affData.affirmationId, affData.message)}>
                Save Affirmation
            </button>
        </div>
    )

}

export default AffirmationModal;