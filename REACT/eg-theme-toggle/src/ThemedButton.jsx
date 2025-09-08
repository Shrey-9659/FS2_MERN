import React from 'react'
import { useContext } from 'react'
import { themeContext } from './context/themeContext'

const ThemedButton = () => {
    const {theme, toggleTheme} = useContext(themeContext)
    console.log(theme)
  return (
    <>
        <button
        onClick={toggleTheme}
        style={{
            background: theme === "light" ? "#fff" : "#333",
            color: theme === "light" ? "#000" : "#fff",
            padding: "10px 20px",
            border : "none",
            borderRadius: "5px"
        }}
        >
            Current Theme : {theme}
        </button>
    </>
  )
}

export default ThemedButton