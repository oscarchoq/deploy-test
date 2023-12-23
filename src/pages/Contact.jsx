import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Inicio</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Conatct</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Contact