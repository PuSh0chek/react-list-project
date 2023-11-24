import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Counter from './components/Counter'
import MyButton from './components/MyButton'

function App() {
  const [count, setCount] = useState(10)

  return (
    <div className="App">
      <Counter number={count} />
      <Button count={count} onClick={setCount} />
      <Button count={count} onClick={setCount} />
      <Button count={count} onClick={setCount} />

      <MyButton />
      <MyButton />
    </div>
  )
}

export default App
