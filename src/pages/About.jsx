import { Link } from "react-router-dom"

const About = () => {
  return (
    <div>
      <h1>About</h1>
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

export default About