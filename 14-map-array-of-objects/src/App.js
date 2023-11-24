import { useState } from 'react'
import './App.css'
import Persons from './components/Persons'

function App() {
  const [infoOfPerson, setInfoOfPerson] = useState('')
  return (
    <div className="App">
      <Persons infoOfPerson={infoOfPerson} setInfoOfPerson={setInfoOfPerson} />
    </div>
  )
}

export default App
