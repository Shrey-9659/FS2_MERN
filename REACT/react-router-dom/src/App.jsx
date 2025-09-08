import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './components/Contact'
import About from './components/About'
import Layout from './components/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='*' element={<h3>404 : Page Not Found</h3>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
