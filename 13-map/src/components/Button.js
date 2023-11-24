function Button({ count, onClick, text }) {
  return <button onClick={() => onClick(count + 1)}>{text}</button>
}

export default Button
