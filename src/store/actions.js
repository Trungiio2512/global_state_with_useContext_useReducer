import { SET_TODO_INPUT, ADD_TODO, DEL_TODO, UPDATE_TODO } from "./constants";

export const setTodoInput = payload => ({
    type: SET_TODO_INPUT,
    payload
})
export const addTodo = payload => ({
    type: ADD_TODO,
    payload
})
export const delTodo = payload => ({
    type: DEL_TODO,
    payload
})

export const updateTodo = payload => ({
    type: UPDATE_TODO,
    payload
})