// import dependencies
import { useQuery, useMutation } from '@apollo/client';
import SAVE_AFFIRMATION from "../utils/mutations";
import GET_AFFIRMATION from "../utils/queries";

const AffirmationModal = () => {
    const { loading, data } = useQuery(GET_AFFIRMATION);

    const [saveAffirmation, { error }] = useMutation(SAVE_AFFIRMATION);

    const handleSaveAffirmation = async (affirmationId, message) => {
        // get token
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
            return false;
        }
        try {
            const { data } = await saveAffirmation({
              variables: { affirmationData: { ...bookToSave } },
            });
            console.log(savedBookIds);
            setSavedBookIds([...savedBookIds, bookToSave.bookId]);
          } catch (err) {
            console.error(err);
          }
      
    }

    return (
        <div key={affirmationId}>
            <h4>
                {message}
            </h4>
            <button onClick={() => handleSaveAffirmation(affirmationId, message)}>
                Save Affirmation
            </button>
        </div>
    )

}

export default AffirmationModal;