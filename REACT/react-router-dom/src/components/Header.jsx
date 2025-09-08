import React from 'react'
import "./Header.css"
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='Header'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
    </div>
  )
}

export default Header