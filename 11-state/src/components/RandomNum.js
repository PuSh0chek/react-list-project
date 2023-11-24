import { useState } from 'react'
import generateRandomNumber from '../utils/generateRandomNumber'

function RandomNum({ maxNum }) {
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber(maxNum))

  const changeRandomNumber = () => {
    setRandomNumber(generateRandomNumber(maxNum))
  }

  return (
    <div>
      <h1>{randomNumber}</h1>
      <button onClick={changeRandomNumber}>Get random number</button>
    </div>
  )
}

export default RandomNum
