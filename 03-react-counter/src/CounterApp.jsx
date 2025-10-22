import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function CounterApp() {
  // Step 1: Declare state with default value 15
  const [counter, setCounter] = useState(15);

  // Step 2: Function to increase value (Max 20)
  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    } else {
      console.log("Value cannot go above 20!");
    }
  };

  // Step 3: Function to decrease value (Min 0)
  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      console.log("Value cannot go below 0!");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Chai aur React Counter App</h1>
      <h2>Current Value: {counter}</h2>

      <button onClick={addValue} style={{ marginRight: "10px" }}>
        Add Value
      </button>

      <button onClick={removeValue}>
        Remove Value
      </button>

      <p style={{ marginTop: "20px" }}>
        (Value range: 0 to 20)
      </p>
    </div>
  );
}

export default CounterApp;


