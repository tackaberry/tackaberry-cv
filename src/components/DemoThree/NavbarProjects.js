import React from 'react'
import { Link } from 'gatsby'
import { useRecoilState } from 'recoil'
import {sModalState} from '../../utils/recoil-atoms'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import NavbarFooter from './NavbarFooter'

const Navbar = () => {
    const [collapsed, setCollapsed] = React.useState(true)
    const [sidebarModal, setSidebarModal] = useRecoilState(sModalState)

    const toggleNavbar = () => {
        setCollapsed(!collapsed)
    }

    const toggleModal = () => {
        setSidebarModal(!sidebarModal)
    }

    React.useEffect(() => {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    })

    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <>
            <nav id="navbar" className="navbar navbar-expand-lg pufo-aside bg-0f1d22">
                <div className="container">

                    <button 
                        onClick={toggleNavbar}
                        className={classTwo} 
                        type="button" 
                        data-toggle="collapse" 
                        data-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <span className="icon-bar top-bar"></span>
                        <span className="icon-bar middle-bar"></span>
                        <span className="icon-bar bottom-bar"></span>
                    </button>

                    <div className={classOne} id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link 
                                    to="/"
                                >
                                    Home
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

                        <NavbarFooter />
                        
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar