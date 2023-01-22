import { NavLink, Link } from 'react-router-dom'
export const NavBar = () => {
  return (
    <nav className="navbar">
      <div>
        <Link to="/">
          <img
            src="./simplon_logo.png"
            alt="logo Simplon"
            className="logo"
          />
        </Link>
      </div>

      <ul className="nav_list">
        <li>
          <NavLink
            to="/"
            className="nav_list--item"
            as={NavLink}
          >
            S'enregister
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/lists"
            className="nav_list--item"
            as={NavLink}
          >
            Liste de présence
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
