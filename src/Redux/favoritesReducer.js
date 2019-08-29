export function favoritesReducer (
    state = {recepies: []}, action
) {
    switch(action.type){
        case 'ADD_ITEM_TO_FAVORITES': {

            for (let i = 0; i < state.recepies.length; i++){
                if(state.recepies[i].key === action.payload.key){
                    
                return state
            }
        }
            const newArray = state.recepies.slice()
                        newArray . push({ 
                            key: action.payload.key,
                            description: action.payload.description
            })
            return {recepies: newArray}
            
        }
        case 'REMOVE_ITEM_FROM_FAVORITES': {
                const newArray = state.recepies.filter((element) => {
                return element.key !== action.payload
                   
                })
                return {recepies: newArray}
            }
            
        default: {
            return state
        }
    }

}