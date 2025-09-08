import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ThemedButton from './ThemedButton'
import Container from './Container'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome to Theme Toggler</h1>
      <ThemedButton />
      <Container />
    </>
  )
}

export default App
