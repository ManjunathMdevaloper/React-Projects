import React from 'react'
import { NavLink } from 'react-router-dom'

const ApiNavbar = () => {
  return (
    <>
      <div className="api-Nav">
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="shopping">Shopping</NavLink></li>
        </ul>
      </div>
    </>
  )
}

export default ApiNavbar
