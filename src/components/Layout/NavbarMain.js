import React from 'react'
import { Link } from 'gatsby'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {

    return (
        <ul className="navbar-nav">
            <li className="nav-item">
                <AnchorLink 
                    offset={() => 100} 
                    className="nav-link" 
                    href="#home"
                >
                    Home
                </AnchorLink>
            </li>
            <li className="nav-item">
                <AnchorLink 
                    offset={() => -1} 
                    className="nav-link" 
                    href="#career-overview"
                >
                    Career Overview
                </AnchorLink>
            </li>
            <li className="nav-item">
                <AnchorLink 
                    offset={() => -1} 
                    className="nav-link" 
                    href="#top7"
                >
                    Top 7 Things You Need to Know About Me
                </AnchorLink>
            </li>
            <li className="nav-item">
                <AnchorLink 
                    offset={() => -1} 
                    className="nav-link" 
                    href="#adayinthelife"
                >
                    A day in the life
                </AnchorLink>
            </li>
            <li className="nav-item">
                <AnchorLink 
                    offset={() => -1} 
                    className="nav-link" 
                    href="#tech4good"
                >
                    Tech for Good &amp; Community
                </AnchorLink>
            </li>
            <li className="nav-item">
                <AnchorLink 
                    offset={() => -1} 
                    className="nav-link" 
                    href="#cnac"
                >
                    Child Nature Alliance of Canada
                </AnchorLink>
            </li>
            <li className="nav-item">
                <AnchorLink 
                    offset={() => -1} 
                    className="nav-link" 
                    href="#pik"
                >
                    Project In Kind
                </AnchorLink>
            </li>
            <li className="nav-item">
                <AnchorLink 
                    offset={() => -1} 
                    className="nav-link" 
                    href="#articles"
                >
                    Articles &amp; Presentations
                </AnchorLink>
            </li>
            <li className="nav-item">
                <Link 
                    to="/projects"
                    className="nav-link" 
                >
                    Projects
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    className="nav-link" 
                    to="/reading-list"
                >
                    Readling List
                </Link>
            </li>
        </ul>

    )
}

export default Navbar