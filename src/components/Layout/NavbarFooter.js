
import React  from 'react'
import { Link } from 'gatsby'

const NavbarFooter = () => {

    return (
        <>
        <div className="aside-footer">
            <Link to="https://drive.google.com/file/d/1fQOfTqaNpsDWsIAf4E3LX-I1P8dyomh7/view" className="common-btn three">
                Download CV <i className='bx bxs-download'></i>
            </Link>
            <ul className="social">
                <li>
                    <a href="https://www.linkedin.com/in/tackaberry/" rel="noreferrer" target="_blank">
                        <i className='bx bxl-linkedin'></i>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/tackaberry" rel="noreferrer" target="_blank">
                        <i className='bx bxl-github'></i>
                    </a>
                </li>
            </ul>
        </div>
    </>
    )
}

export default NavbarFooter