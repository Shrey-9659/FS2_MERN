import React, { useState } from 'react'

const ShowText = () => {
    const [text, setText] = useState("")
    const [hideButton, setHideButton] = useState(false)
    const [showText, setShowText] = useState(true)
    const handleChange = (e) => {
        setText(e.target.value)
        setHideButton(true)
    }
    const handleShowText = () => {
        if(hideButton) setShowText(false)
    }
    
  return (
    <div>
        <textarea name="" id="" cols="50" rows="7" placeholder='Enter a text to show' value={text} onChange={handleChange}></textarea>
        {showText ? <p>{text}</p> : ""}
        {text ? <button onClick={handleShowText}>Hide Text</button> : ""}
        
    </div>
  )
}

export default ShowText