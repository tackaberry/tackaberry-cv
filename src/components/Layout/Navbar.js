import React from 'react'
import NavbarFooter from './NavbarFooter'
import NavbarMain from './NavbarMain'
import NavbarProjects from './NavbarProjects'
import NavbarReading from './NavbarReading'

const Navbar = ({page}) => {

    const [collapsed, setCollapsed] = React.useState(true)

    const toggleNavbar = () => {
        setCollapsed(!collapsed)
    }

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
                        { page==="index" && (<NavbarMain />)}
                        { page==="reading-list" && (<NavbarReading />)}
                        { page==="projects" && (<NavbarProjects />)}
                        <NavbarFooter />
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar