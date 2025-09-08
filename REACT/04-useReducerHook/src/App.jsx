import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const reducer = (state, action) => {
    if(action.type === "INC"){
      return state + 1;
    }else if(action.type === "DEC"){
      return state - 1;
    }
  }
  // const [count, setCount] = useState(0)
  
  // const [stateVariable, dispatch] = useReducer(reducerFunction, initialValue)
  const [count, dispatch] = useReducer(reducer, 0)
  
  return (
    <>
    <h1>{count}</h1>
    <button onClick={() => dispatch({type: "INC"})}>Increase</button>
    <button onClick={() => dispatch({type: "DEC"})}>Decrease</button>
    </>
  )
}

export default App
