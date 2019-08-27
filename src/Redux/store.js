import { createStore, applyMiddleware, combineReducers } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { recepiesReducer } from './recepiesReducer'
import { favoritesReducer } from './favoritesReducer'


const rootReducer = combineReducers({
    recepies: recepiesReducer,
    favorites: favoritesReducer
})
//create store object by combining the reducers
const store = createStore(rootReducer, applyMiddleware(logger, thunk))

console.log(store)
console.log(store.getState())

export default store