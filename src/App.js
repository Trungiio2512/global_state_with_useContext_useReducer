
import './App.css';
import { useStore } from './store'
import { useRef, useState} from 'react';
import { actions } from './store'

function App() {

  const inputRef = useRef()
  const [state, dispatch] = useStore()
  const [update, setUpdate] = useState(false)
  const [idItem, setIdItem] = useState(false)

  const {todoInput, todos} = state

  const hanldeSubmit = () => {
    inputRef.current.focus()
    dispatch(actions.addTodo(todoInput))
    dispatch(actions.setTodoInput(''))
  }

  const handleUpdate = () => {
    dispatch(actions.updateTodo({idItem,todoInput}))
    setUpdate(false)
    inputRef.current.focus()
    dispatch(actions.setTodoInput(''))
  }
  
  const handleDelItem = (index) => {
    dispatch(actions.delTodo(index))
  }
  
  const handleEdit = (index) => {
    setUpdate(true)
    setIdItem(index)
    inputRef.current.focus()
    dispatch(actions.setTodoInput(todos[index]))
  }

  console.log('render')
  return (
    <div>
      <input
        value={todoInput}
        placeholder = 'Enter your...'
        onChange={ e => {
           dispatch(actions.setTodoInput(e.target.value))
        }}
        ref = {inputRef}
      />
      <button 
        onClick = {update ? handleUpdate : hanldeSubmit}
      >
        {update ? 'Update' : 'Add'}
      </button>
      <ul>
        { todos.map((todo, index)=> 
            <li key = {index} data-index="{index}">
              {todo}
                <button  
                  onClick = {() => handleDelItem(index)}
                >
                  Xoa
                </button> 
                <button 
                  onClick = { () => handleEdit(index)}
                >
                  Sua
                </button> 
            </li> 
        )}
      </ul>

    </div>
  );
}

export default App;
