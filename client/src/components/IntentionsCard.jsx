import { useMutation } from '@apollo/client';
import { UPDATE_INT } from '../utils/mutations';
import { GET_ME } from '../../utils/queries';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const IntentionsCard = ({ intention }) => {
    const [intention, setIntention] = useState('');
    const [updateInt, { error }] = useMutation
        (UPDATE_INT, {
            refetchQueries: [
                GET_ME,
                'me'
            ]
        });
    const handleUpdateInt = async (event) => {
        event.preventDefault()
        try {
            const { data } = await updateInt({
                variables: { intention },
            });
            setIntention('')
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
                    <Form.Label htmlFor='intention'>Intention</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Your Intention'
                        name='Intention'
                        value={intention}
                        required
                    />
                </Form.Group>
                <Button
                    disabled={!(intention)}
                    type='submit'
                >
                    Set Intention
                </Button>
            </Form>        </div>
    )
}

