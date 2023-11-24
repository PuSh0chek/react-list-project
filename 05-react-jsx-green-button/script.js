const App = ({ initialButtonText, initialButtonClass }) => {
  const [buttonText, setButtonText] = React.useState(initialButtonText)
  const [buttonClass, setButtonClass] = React.useState(initialButtonClass)
  const onButtonClick = () => {
    setButtonText(`Hello from React`)
    setButtonClass(`app green-btn`)
  }

  return (
    <div className="app">
      <button className={buttonClass} onClick={onButtonClick}>
        {buttonText}
      </button>
    </div>
  )
}

const container = document.getElementById('app')
const root = ReactDOM.createRoot(container)
root.render(<App initialButtonClass="app" initialButtonText="Click me" />)
