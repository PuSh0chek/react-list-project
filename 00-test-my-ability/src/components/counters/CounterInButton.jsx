import { useState } from 'react'

function CounterInButton() {
    const [number, setNumber] = useState(0)
    return <button onClick={() => setNumber(number + 1)}>{number}</button>
}

export default CounterInButton
