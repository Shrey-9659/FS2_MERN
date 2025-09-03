import React from 'react'

const Task = ({task, value}) => {

  return (
    <div>
        <p>Task {value} : {task}.</p>
    </div>
  )
}

export default Task

