import * as actionType from '../ActionTypes/ActionTypes';

const INITIAL_STATE = {
    todoIncomplete: [],
    todoComplete: [],
}

export const Reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case actionType.ADD_NEW:
            console.log(action.payload)
            return {
                ...state, 
                todoIncomplete: [... state.todoIncomplete, { message: action.payload }].reverse()
            };
        case actionType.REMOVE:

            const newList = state.todoIncomplete.filter((item, i) => i !== action.payload)
            return {
                ...state,
                todoIncomplete: newList
            };
        case actionType.DONE:
            const newList1 = state.todoIncomplete.filter((item, i) => {
                if (i === action.payload) {
                    return item.message
                }
            })
            const list = state.todoIncomplete.filter((item, i) => i !== action.payload)
            return {
                ...state, todoComplete: [... state.todoComplete, newList1],
                todoIncomplete: list
            }
        default:
            return state
    }
};




export default Reducer;