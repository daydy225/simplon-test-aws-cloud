import { NavLink } from 'react-router-dom'
export const NavBar = () => {
  return (
    <nav className="navbar">
      <div>
        <img
          src="./simplon_logo.png"
          alt="logo Simplon"
          className="logo"
        />
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
            to="/list"
            className="nav_list--item"
            as={NavLink}
          >
            Liste de présence
          </NavLink>
        </li>
        {/* <li className="nav_list--item">S'enregister</li>
        <li>Liste de présence</li> */}
      </ul>
    </nav>
  )
}

export default NavBar
