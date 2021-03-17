import * as actionsType from '../ActionTypes/ActionTypes';

//Add New
export function addNew(data) {
    console.log(data)
    return dispatch => {
        return dispatch({
            type: actionsType.ADD_NEW,
            payload: data
        })
    }
}

// Done
export function done(data) {  
    return dispatch => {  
        return dispatch({  
            type: actionsType.DONE,  
            payload: data  
        });  
    }  
};

// Remove
export function remove(data) { 
    return dispatch => {  
        return dispatch({  
            type: actionsType.REMOVE,  
            payload: data  
        });  
    }  
};
export function reset(data) { 
    return dispatch => {  
        return dispatch({  
            type: actionsType.RESET,  
            payload: data  
        });  
    }  
};

