import { createStore, applyMiddleware, combineReducers } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

export function saveUsername (username) {
   return function(dispatch) {
       dispatch({ 
        type: 'SAVE_USERNAME' , 
        payload: username
    })
   }
}

function usernameReducer (state= {usernameReducer: ''}, action) {
if (action.type.toUpperCase() === 'SAVE_USERNAME'){

    //return Object.assign({}, state, {usernameReducer: action.payload})
    return {...state, usernameReducer: action.payload}
} else {

    return state
}

}

const rootReducer = combineReducers({

    usernameReducer
})
//create store object by combining the reducers
const store = createStore(rootReducer, applyMiddleware(logger, thunk))

console.log(store)
console.log(store.getState())

export default store