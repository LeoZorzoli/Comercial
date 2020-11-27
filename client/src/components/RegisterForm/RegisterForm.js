import React from 'react'
import { useDispatch } from 'react-redux'
import { useField } from '../../hooks/index'
import { register } from '../../reducers/registerReducer'
import { login } from '../../reducers/loginReducer'
import { useHistory } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { createNotification } from '../../reducers/notificationReducer'
import Notification from '../../components/Notification/Notification'

const RegisterForm = () => {

    const username = useField('text')
    const name = useField('text')
    const password = useField('password')
    const password2 = useField('password')

    const dispatch = useDispatch()
    const history = useHistory()
    
    const handleRegister = async (event) => {
        event.preventDefault()

        if(password.value !== password2.value){
            dispatch(createNotification('Your password doesnt match', 'bad', 2))
        } else {
            const userToRegister = {
                username: username.value,
                name: name.value,
                password: password.value
            }

            dispatch(register(userToRegister))
            history.push('/login')
        }
    }

    return(
        <div>
            <h2>Register</h2>
            <Notification />
            <Form onSubmit={handleRegister}>
                <Form.Group controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control {...username} placeholder="Username" />
                </Form.Group>
                <Form.Group controlId="formName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control {...name} placeholder="Full Name" />
                </Form.Group>
                <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control {...password} placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formPassword2">
                    <Form.Label>Repeat your password</Form.Label>
                    <Form.Control {...password2} placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">Register</Button>
            </Form>
        </div>
    )
}

export default RegisterForm