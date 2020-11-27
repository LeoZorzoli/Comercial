import loginService from '../services/login'

const loggedInUserJSON = JSON.parse(
    window.localStorage.getItem('loggedAppUser'),
)

const initialState = loggedInUserJSON ? loggedInUserJSON : null

export const login = (userToLogIn) => {
    return async dispatch => {
        const user = await loginService.login(userToLogIn)
        dispatch({
            type: 'LOGIN',
            data: user
        })
    }
}

export const logout = () => {
    return {
        type: 'LOGOUT'
    }
}

const loginReducer = (state = initialState, action) => {
    switch(action.type){
        case 'LOGIN':
            return action.data
        case 'LOGOUT': {
            return null
        }
        default:
            return state
    }
}

export default loginReducer