import React, { useState } from 'react'
import "./App.css"

const App = () => {
  const [count, setCount] = useState(0)
  const handleInc = () => {
    setCount(count + 1)
  }
  const handleDec = () => {
    setCount(count - 1)
  }

  return (
    <>
      <h1>Counter to understand useState</h1>
      <hr />
      <h1>{count}</h1>
      <button onClick={handleInc}>Increase</button>
      <button onClick={handleDec}>Decrease</button>
    </>
  )
}

export default App