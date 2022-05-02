import React from 'react'
import { Link } from 'gatsby'

const MainBanner = () => {
    return (
        <div id="home" className="banner-area border-bottom">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="banner-content">
                            <h1>Brett Tackaberry</h1>
                            <p>Building on a rewarding and productive 20 year career in digital and technology leadership, I want to focus and work on the climate crisis. I’ve always contributed to a wider concept of social impact through my work on Tech4Good, CivicTech and RHoK - but after a year of coaching and personal reflection, I am realigning and committing to working on the climate crisis. Living in Canada, situated on beautiful land,  with a long history of stewardship for nature, I’ve developed a deep connection and responsibility to improve its current condition.  I want to work on carbon sequestration by working on reforestation, agriculture or ocean health. Functionally speaking, as an software engineering manager, director or in leadership.</p>

                            <div className="banner-btn-area">
                                <Link to="mailto:brett.tackaberry@gmail.com" className="common-btn">
                                    Email me
                                </Link>
                                <Link to="https://calendly.com/tackaberry" className="common-btn banner-btn">
                                    Book some time
                                </Link>
                            </div>

                            <ul>
                                <li>
                                    <Link to="https://twitter.com/tackaberry">
                                        <i className='bx bxl-twitter'></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://ca.linkedin.com/in/tackaberry">
                                        <i className='bx bxl-linkedin'></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://github.com/tackaberry">
                                        <i className='bx bxl-github'></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBanner