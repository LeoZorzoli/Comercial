const initialState = ''

export const createNotification = (message, status, time) => {
    return async dispatch => {
        dispatch({
            type: 'SET_NOTIFICATION',
            data: {
                message,
                status,
                delay: setTimeout(() => {
                    dispatch(deleteNotification(''))
                }, time * 1000)
            }
        })
    }
}

export const deleteNotification = () => {
    return {
        type: 'DELETE_NOTIFICATION'
    }
}

const notificationReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_NOTIFICATION':
            clearTimeout(state.delay)
            return action.data
        case 'DELETE_NOTIFICATION':
            return initialState
        default:
            return state
    }
}

export default notificationReducer