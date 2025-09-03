import React from 'react'
import "./App.css"
import Task from './Task'

const App = () => {
  return (
    <div>
      <h1>List of tasks : </h1>
      <Task task="I will study" value={1}/>
      <Task task="I will play cricket" value={2}/>
      <Task task="I will drink water" value={3}/>
      <Task task="I am sample task one" value={4}/>
      <Task task="I am sample task two" value={5}/>
    </div>
  )
}

export default App