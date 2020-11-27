import React from 'react'
import { useField } from '../../hooks/index'
import { useDispatch } from 'react-redux'
import { login } from '../../reducers/loginReducer'
import { useHistory } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'

const LoginForm = () => {
    const username = useField('text')
    const password = useField('password')

    const dispatch = useDispatch()
    const history = useHistory()

    const handleLogin = async (event) => {
        event.preventDefault()
        
        const user = {
            username: username.value,
            password: password.value
        }

        dispatch(login(user))

        window.localStorage.setItem(
          'loggedAppUser', JSON.stringify(user)
        )

        history.push('/')
      }

    return (
        <div>
            <h2>Login</h2>

            <Form onSubmit={handleLogin}>
                <Form.Group controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control {...username} placeholder="Username" />
                </Form.Group>
                <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control {...password} placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">Login</Button>
            </Form>
        </div>
    )
}
  
  export default LoginForm