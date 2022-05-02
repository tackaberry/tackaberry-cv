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
                                    href="#reading"
                                >
                                    Readling List
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
                                    href="#articles"
                                >
                                    Articles &amp; Presentations
                                </AnchorLink>
                            </li>
                            <li className="nav-item">
                                <Link 
                                    to="/projects"
                                >
                                    Projects
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