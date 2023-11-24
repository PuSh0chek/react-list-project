import { useState } from 'react'
import CounterInButton from './CounterInButton'

function Counter() {
    const [count, setCount] = useState(0)

    const toChangeCount = (action) => {
        setCount(action)
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => toChangeCount(count + 1)}>Прибавить</button>
            <button onClick={() => toChangeCount(count - 1)}>Убавить</button>
            <CounterInButton />
            <CounterInButton />
        </div>
    )
}

export default Counter
