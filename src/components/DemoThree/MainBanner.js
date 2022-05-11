import React from 'react'
import { Link } from 'gatsby'

const MainBanner = () => {
    return (
        <div id="home" className="banner-area border-bottom-two three">
            
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="banner-content">
                            <h1>Brett <span>Tackaberry</span></h1>
                            <p>I've been working with technology for the last 20+ years, building engineering teams to solve problems through <span>engineering excellence</span>. I've worn many hats from software engineer to Chief Technology Officer, always translating complex product visions into technical roadmaps and deployed products - and everything in between. I believe in <span>positive</span> impact and building trusted relationships and rapport with everyone. </p>
                            <p>I’ve always contributed to a wider concept of social impact through my work on Tech4Good, CivicTech and RHoK, and after a year of coaching and personal reflection, <span>I am realigning and committing to collaborate and work on the climate crisis.</span> </p>
                            <p>Are you also working on climate change? Are you interested in discussing engineering leadership and management? Let's have a chat!</p>

                            <div className="banner-btn-area">
                                <Link to="mailto:brett.tackaberry@gmail.com" className="common-btn three">
                                    Email me
                                </Link>
                                <Link to="https://calendly.com/tackaberry" className="common-btn banner-btn three">
                                    Book some time
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBanner