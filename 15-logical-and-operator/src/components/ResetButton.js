function ResetButton(count, setCount) {
  const resetStyle = { backgroundColor: 'lightblue' }

  const resetCount = () => {
    setCount(0)
  }

  return (
    <div>
      {!!count && (
        <button onClick={resetCount} style={resetStyle}>
          Reset
        </button>
      )}
    </div>
  )
}

export default ResetButton
