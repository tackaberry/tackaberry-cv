import React from 'react'
import { Link } from 'gatsby'
import AnchorLink from 'react-anchor-link-smooth-scroll'

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
            <li className="nav-item">
                <AnchorLink 
                    offset={() => -1} 
                    className="nav-link" 
                    href="#ttt"
                >
                    Tic-Tac-Toe with #RebelXO
                </AnchorLink>
            </li>
            <li className="nav-item">
                <AnchorLink 
                    offset={() => -1} 
                    className="nav-link" 
                    href="#estimote"
                >
                    Estimote beacons at the Museum of Nature
                </AnchorLink>
            </li>
            <li className="nav-item">
                <AnchorLink 
                    offset={() => -1} 
                    className="nav-link" 
                    href="#rw"
                >
                    RentingWell.com
                </AnchorLink>
            </li>
            <li className="nav-item">
                <AnchorLink 
                    offset={() => -1} 
                    className="nav-link" 
                    href="#aski"
                >
                    Help Me Tell My Story
                </AnchorLink>
            </li>
        </ul>
    )
}

export default Navbar