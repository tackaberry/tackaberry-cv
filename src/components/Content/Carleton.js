import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

const MainBanner = () => {
    return (
        <div id="carleton" className="about-area border-bottom-two three ptb-100">
            
            <div className="container align-items-center">
                <div className="row align-items-center">

                    <div>
                        <div className="about-content about-content--techforgood">

                            <StaticImage alt="Carleton University Logo" src={'../../images/carleton.jpg'} />

                            <h3>Graduated Carleton University, Mechanical Engineering 2001, Dean's List</h3>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBanner