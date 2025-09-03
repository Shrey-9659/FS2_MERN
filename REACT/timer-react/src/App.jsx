import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    let interval;
    if(isRunning){
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isRunning])

  const handleStart = () => {
    setIsRunning(true)
  }
  const handleStop = () => {
    setIsRunning(false)
  }
  const handleReset = () => {
    setIsRunning(false)
    setTime(0)
  }
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds/60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2,"0")}:${String(secs).padStart(2, "0")}`
  }

  return (
    <>
      <div className="" style={{textAlign: "center", marginTop: "50px"}}>
        <h1>⏱️ Stopwatch</h1>
        <h2>{formatTime(time)}</h2>
        <button onClick={handleStart} style={{margin: "10px"}} disabled={isRunning}>Start</button>
        <button style={{margin: "10px"}} onClick={handleStop} disabled={!isRunning}>Stop</button>
        <button style={{margin: "10px"}} onClick={handleReset}>Reset</button>
      </div>
    </>
  )
}

export default App
