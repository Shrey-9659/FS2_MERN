import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child1 from './components/Child1'
import { userContext } from './context/userContext'
const userInfo = {
  name : "Shrey Khandelwal",
  location : "Himachal Pradesh"
}

function App() {
  const data = useContext(userContext)
  data.setUser(userInfo)
  return (
    <>
    <Child1 />
    </>
  )
}

export default App
