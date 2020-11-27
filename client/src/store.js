import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import loginReducer from './reducers/loginReducer'
import registerReducer from './reducers/registerReducer'
import userReducer from './reducers/userReducer'
import notificationReducer from './reducers/notificationReducer'

const reducer = combineReducers({
    login: loginReducer,
    user: userReducer,
    register: registerReducer,
    notification: notificationReducer
})

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

export default store