import React from 'react'
import { useContext } from 'react'
import { themeContext } from './context/themeContext'

const Container = () => {
    const {theme} = useContext(themeContext);
  return (
    <div style={{
    background: theme === "light" ? "#fff" : "#333",
    height : "400px",
    width: "400px",
    border: "2px solid white",
    margin: "1rem"
}}>

    </div>
  )
}

export default Container