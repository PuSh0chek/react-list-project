function Login() {
  function handleFormSubmit(event) {
    event.preventDefault()
    const dataFromForm = {
      login: event.target.username.value,
      password: event.target.password.value,
    }
    console.log(dataFromForm)
    alert(JSON.stringify(dataFromForm))
  }

  return (
    <>
      <h1>Login form</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          User name:
          <input type="text" name="username" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  )
}

export default Login
