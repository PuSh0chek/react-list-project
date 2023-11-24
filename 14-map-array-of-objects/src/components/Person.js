function Person({ firstName, lastName, email, image }) {
  return (
    <div className="card">
      <img src={image}></img>
      <h2>
        {firstName} {lastName}
      </h2>
      <h3>{email}</h3>
    </div>
  )
}

export default Person
