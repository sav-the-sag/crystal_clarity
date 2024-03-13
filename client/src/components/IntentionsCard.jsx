import { useMutation } from '@apollo/client';
import { UPDATE_INT } from '../utils/mutations';
import { GET_ME } from '../utils/queries';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const IntentionsCard = ({ intention }) => {
    const [intentionData, setIntentionData] = useState({intention: ''});
    const [updateInt, { data, error }] = useMutation
        (UPDATE_INT, {
            refetchQueries: [
                GET_ME,
                'me'
            ]
        });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setIntentionData({
            ...intentionData,
            [name]: value
        })
    }
    const handleUpdateInt = async (event) => {
        event.preventDefault()
        console.log(intentionData)

        try {
            const { data } = await updateInt({
                variables: { ...intentionData },
            });
            setIntentionData({intention: ''})
        } catch (err) {
            console.error(err);
        }
    };
    return (
        <div>
            <div>
                <h4>
                    Intention: {intention}
                </h4>
            </div>
            <Form onSubmit={handleUpdateInt}>
                <Form.Group>
                    <Form.Label htmlFor='intention'>Intention </Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Your Intention'
                        name='intention'
                        value={intentionData.intention}
                        onChange={handleInputChange}
                        required
                    />
                </Form.Group>
                <Button
                    disabled={!(intentionData.intention)}
                    type='submit'
                    className="intention-btn"
                >
                    Set Intention
                </Button>
            </Form>        </div>
    )
}

export default IntentionsCard;
