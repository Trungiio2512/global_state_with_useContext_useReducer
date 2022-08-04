import { SET_TODO_INPUT,ADD_TODO, DEL_TODO, UPDATE_TODO } from './constants'

const initState = {
    todos: [],
    todoInput: ''
}

function reducer (state, action) {
    let newState
    switch (action.type) {
        case SET_TODO_INPUT: 
            return {
                ...state,
                todoInput: action.payload
            }
        case ADD_TODO: 
            return {
                ...state,
                todos:[...state.todos, action.payload]
            }
        case DEL_TODO: 
            newState = [...state.todos]
            newState.splice(action.payload, 1)

            return {
                ...state,
                todos: newState
            }
        case UPDATE_TODO: 
            const {idItem, todoInput} = action.payload
            newState = [...state.todos]

            newState.splice(idItem, 1, todoInput)

            return {
                ...state,
                todos: newState
            }
        default:
             throw new Error(`Invalid action ${action.type}`)
    }
}

export { initState }
export default reducer
