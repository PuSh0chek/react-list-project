import './App.css'
import Wrapper from './components/Wrapper'

function App() {
    return (
        <div className="App">
            <Wrapper color="lightblue">
                <h1>Text inside of the Wrapper</h1>
                <button>Click</button>
            </Wrapper>
            <Wrapper color="green">
                <h1>Another text</h1>
                <input type="text" placeholder="Enter value" />
            </Wrapper>
        </div>
    )
}

export default App
