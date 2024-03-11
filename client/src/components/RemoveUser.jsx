// imports
import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { REMOVE_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const RemoveUser = () => {
    const [userFormData, setUserFormData] = useState({ email: '', password: '' });
    const [removeUser, { data, error }] = useMutation(REMOVE_USER)

    const handleInputChange = (event) => {
        const { name, value } = event.target;
    
        setUserFormData({
          ...userFormData,
          [name]: value 
        });
      };

    const handleRemoveUser = async (event) => {
        event.preventDefault();
        // get token
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
            return false;
        }
        try {
            const { data } = await removeUser({
                variables: { ...userFormData }
            });
            Auth.logout
        } catch (err) {
            console.error(err);
        }

        setUserFormData({
            email: '',
            password: '',
        });
    };

    return (
        <>
            <h4> Are you sure you want to delete your profile?</h4>
            <br />
            <h6> If so, please enter your email and password. </h6>
            <Form onSubmit={handleRemoveUser}>
                <Form.Group>
                    <Form.Label htmlFor='email'>Email</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Your email'
                        name='email'
                        onChange={handleInputChange}
                        value={userFormData.email}
                        required
                    />
                    <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor='password'>Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Your password'
                        name='password'
                        onChange={handleInputChange}
                        value={userFormData.password}
                        required
                    />
                    <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
                </Form.Group>
                <Button
                    disabled={!(userFormData.email && userFormData.password)}
                    type='submit'
                    variant='danger'>
                    Submit
                </Button>
            </Form>
        </>
    );
}

export default RemoveUser;