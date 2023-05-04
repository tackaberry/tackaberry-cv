import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => {
  
    return (
        <ul className="navbar-nav">
            <li className="nav-item">
                <Link 
                    to="/"
                >
                    🡄 back to tackaberry.dev
                </Link>
            </li>
        </ul>

    )
}

export default Navbar