import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Counter from './components/Counter'
import MyButton from './components/MyButton'

function App() {
  const [count, setCount] = useState(10)
  const texts = ['Ok', 'Click', 'Back', 'Back', 'Back', 'Back']
  return (
    <div className="App">
      <Counter number={count} />
      {texts.map((text, index) => {
        return (
          <Button count={count} key={index} text={text} onClick={setCount} />
        )
      })}
      <br />
      <MyButton />
      <MyButton />
    </div>
  )
}

export default App
