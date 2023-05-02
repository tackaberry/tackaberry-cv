import React from 'react'
import { Link } from 'gatsby'
import NavbarFooter from './NavbarFooter'

const Navbar = () => {
  
    return (
        <>
            <nav id="navbar" className="navbar navbar-expand-lg pufo-aside bg-0f1d22">
                <div className="container">


                    <div className={'collapse navbar-collapse show'} id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link 
                                    to="/"
                                >
                                    back to tackaberry.dev
                                </Link>
                            </li>
                        </ul>

                        <NavbarFooter />
                        
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar