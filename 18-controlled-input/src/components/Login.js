import { useState } from 'react'

function Login() {
  const [data, setData] = useState({ username: '', password: '' })

  function handleFormSubmit(event) {
    event.preventDefault()
    console.log(data)
    alert(JSON.stringify(data))
  }

  function changeValueOfInput(text, name) {
    setData({ ...data, [name]: text })
  }

  return (
    <>
      <h1>Login form</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          User name:
          <input
            type="text"
            value={data.username}
            onChange={(event) =>
              changeValueOfInput(event.target.value, 'username')
            }
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={data.password}
            onChange={(event) =>
              changeValueOfInput(event.target.value, 'password')
            }
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  )
}

export default Login
