import { useState } from 'react'
import Chai from "./chai"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Chai/>
      <h1>hello world</h1>
      <p>test para</p>
    </>
  
  )
}

export default App
