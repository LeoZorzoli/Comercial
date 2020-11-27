import registerService from '../services/register'

export const register = (userToRegister) => {
    return async dispatch => {
        const user = await registerService.register(userToRegister)
        dispatch({
            type: 'REGISTER',
            data: user
        })
    }
} 

const registerReducer = (state = null, action) => {
    switch(action.type){
        case 'REGISTER':
            return action.data
        default:
            return state
    }
}

export default registerReducer