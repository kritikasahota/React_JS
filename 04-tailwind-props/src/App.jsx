import { useState } from 'react'
import './App.css'
import './index.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="h-screen bg-purple-500 text-white flex items-center justify-center text-4xl">
      Tailwind is working! 🚀
    </div>
    </>
  )
}

export default App
