import "./App.css"
import Button from "./components/Button"
import Counter from "./components/Counter"
import logo from "./images/logo.png"
import { useState } from "react"

function App() {

  const [clicks, setClicks] = useState(0)

  const increaseClick = () => {
    setClicks(clicks + 1)
  }

  const decreaseClick = () => {
    setClicks(clicks -1)
  }

  const resetCounter = () => {
    setClicks(0)
  }

  return (
    <div className="App">
      <div className="freecodecamp-logo-container">
        <img
          className="freecodecamp-logo"
          src={logo}
          alt="Logo freeCodeCamp"
        />
      </div>
      <div className="counter-container">
        <Counter clicks={clicks} />
        <Button text="Click Me to +!" isClickButton={true} manageClick={increaseClick} />
        <Button text="Click Me to -!" isClickButton={true} manageClick={decreaseClick} />
        <Button text="Reset Counter!" isClickButton={false} manageClick={resetCounter} />
      </div>
    </div>
  );
}

export default App;
