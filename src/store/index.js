import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

// reducers
import moviesReducers from './reducers/moviesReducers'

const rootReducers = combineReducers({ moviesReducers })
const store = createStore(rootReducers, applyMiddleware(thunk))

export default store