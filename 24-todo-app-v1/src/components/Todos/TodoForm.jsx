import { useState } from 'react'

function TodoForm({ addTodo }) {
    const [text, setText] = useState('')

    const onSubmitHanldler = (event) => {
        event.preventDefault()
        addTodo(text)
        setText('')
    }
    return (
        <form onSubmit={onSubmitHanldler}>
            <input
                onChangeCapture={(e) => setText(e.target.value)}
                value={text}
                placeholder="Enter new todo"
                type="text"
            />
            <button type="submit">Submit</button>
        </form>
    )
}

export default TodoForm
