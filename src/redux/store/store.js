import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { authReducer } from '../reducers/authReducer'

const rootReducer = combineReducers({
  auth: authReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
