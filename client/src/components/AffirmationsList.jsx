import { useMutation } from '@apollo/client';

import { REMOVE_AFFIRMATION } from '../utils/mutations';

import { GET_ME } from '../../utils/queries';

const AffirmationsList = ({ savedAffirmations, isLoggedInUser = false }) => {

    const [removeAffirmation, { error }] = useMutation
        (REMOVE_AFFIRMATION, {
            refetchQueries: [
                GET_ME,
                'me'
            ]
        });

    const handleRemoveAffirmation = async (affirmationId) => {
        try {
            const { data } = await removeAffirmation({
                variables: { affirmationId },
            });
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <div className="flex-row justify-space-between my-4">
                {savedAffirmations &&
                    savedAffirmations.map((affirmation) => (
                        <div key={affirmation.affirmationId} className="col-12 col-xl-6">
                            <div className="card mb-3">
                                <h5 className="p-2 m-0">
                                    {affirmation.message} <br />
                                </h5>
                                <button className="btn btn-danger" onClick={() => handleRemoveAffirmation(affirmation.affirmationId)}>Delete Affirmation</button>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default AffirmationsList'