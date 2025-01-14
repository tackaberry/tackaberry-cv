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
                            <p>I've been working with technology for the last 20+ years, building engineering teams to solve problems through <span>engineering excellence</span>. I've worn many hats from software engineer to Chief Technology Officer, always translating complex product visions into technical roadmaps and deployed products - and everything in between. I believe in <span>positive impact</span> and building trusted relationships and rapport with everyone. </p>

                            <div className="banner-btn-area">
                                <Link to="https://www.linkedin.com/in/tackaberry/" target='_blank' className="common-btn banner-btn three">
                                    Connect on LinkedIn
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