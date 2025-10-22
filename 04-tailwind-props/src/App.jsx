import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-red-400 text-white p-4 rounded-xl mb-4'>Tailwind CSS</h1>
      <Card />
      
    </>
  )
}

export default App
