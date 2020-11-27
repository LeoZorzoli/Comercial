import React, { useEffect } from 'react'
import { initialUsers } from './reducers/userReducer'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' 
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import NavbarComponent from './components/Navbar/NavbarComponent'
import Notification from './components/Notification/Notification'

function App() {

  const user = useSelector(state => state.login)
  const notification = useSelector(state => state.notification)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initialUsers())
  }, [dispatch])
 
  useEffect(() => {
    window.localStorage.setItem('loggedAppUser', JSON.stringify(user))
  }, [user])

  return (
    <div >
      <Router>
        <NavbarComponent />
        <div>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/register">
              <RegisterPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
