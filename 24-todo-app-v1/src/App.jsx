import { useState } from 'react'
import './App.css'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'

function App() {
    const [todos, setTodos] = useState([])

    const addTodoHandler = (content) => {
        setTodos([...todos, content])
    }

    return (
        <div className="App">
            <h1>Todo App</h1>
            <TodoForm addTodo={addTodoHandler} />
            <TodoList todos={todos} />
        </div>
    )
}

export default App
