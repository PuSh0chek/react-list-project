import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
    const [todo, setTodo] = useState(null)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => setTodo(json))
    }, [])
    console.log(1)
    console.log(todo)

    return <div className="App">{todo && todo.title}</div>
}

export default App
