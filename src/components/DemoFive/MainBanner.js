import React from 'react'
import { Link } from 'gatsby'
import banner from '../../components/App/assets/images/banner/banner-main4.png'

const MainBanner = () => {
    return (
        <div id="home" className="banner-area five">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="banner-content">
                            <span className="sub-head">Hey It's</span>
                            <h1>Reton</h1>
                            <p>Hello I am a <span>Graphic Designer</span> from San Francisco</p>

                            <div className="banner-btn-area">
                                <Link to="#" className="common-btn five">
                                    Contact With Me
                                </Link>
                                <Link to="#" className="common-btn five banner-btn">
                                    Hire Me
                                </Link>
                            </div>

                            <div className="banner-img">
                                <img src={banner} alt="Banner" />
                            </div>

                            <div className="banner-social-text">
                                <ul>
                                    <li>
                                        <a href="https://facebook.com/" rel="noreferrer" target="_blank">FB</a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/" rel="noreferrer" target="_blank">TW</a>
                                    </li>
                                    <li>
                                        <a href="https://linkedin.com/" rel="noreferrer" target="_blank">LN</a>
                                    </li>
                                    <li>
                                        <a href="https://behance.com/" rel="noreferrer" target="_blank">BE</a>
                                    </li>
                                    <li>
                                        <a href="https://dribbble.com/" rel="noreferrer" target="_blank">DRI</a>
                                    </li>
                                    <li>
                                        <a href="https://instagram.com/" rel="noreferrer" target="_blank">INS</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="banner-email">
                                <a href="mailto:hello@reton.com">hello@reton.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lines">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </div>
    )
}

export default MainBanner