import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../reducers/loginReducer'
import { useHistory } from 'react-router-dom'

const NavbarComponent = () => {
    const user = useSelector(state => state.login)

    const dispatch = useDispatch()
    const history = useHistory()

    const handleLogout = async () => {
        window.localStorage.removeItem('loggedAppUser')
        dispatch(logout())
        history.push('/')

    }
    
    const userLogged = () => {
        return(
            <Nav className="ml-auto">
                <Nav.Link className="nav-link" href="#">{user.username}</Nav.Link>
                <Nav.Link className="nav-link" href="#" onClick={handleLogout}>Logout</Nav.Link>
            </Nav>
        )
    }
    const userAnonymous = () => {
        return(
            <Nav className="ml-auto">
                <NavLink className="nav-link" to="/login">Login</NavLink>
                <NavLink className="nav-link" to="/register">Register</NavLink>
            </Nav>
        )
    }

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <NavLink className="nav-link" to="/">Home</NavLink>
                {user ? userLogged() : userAnonymous()}
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarComponent