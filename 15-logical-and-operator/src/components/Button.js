function Button({ count, onClick }) {
  return <button onClick={() => onClick(count + 1)}>Click</button>
}

export default Button
