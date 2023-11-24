import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Counter from './components/Counter'
import MyButton from './components/MyButton'
import ResetButton from './components/ResetButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Counter number={count} />
      <Button count={count} onClick={setCount} />
      <ResetButton count={count} setCount={setCount} />
      <br />
      <MyButton />
      <MyButton />
    </div>
  )
}

export default App
