import React, { useContext } from 'react'
import { userContext } from '../context/userContext'

const GrandChild = () => {
    const {user} = useContext(userContext);
    console.log(user)
  return (
    <div>My name is {user.name}. I am in {user.location}</div>
  )
}

export default GrandChild