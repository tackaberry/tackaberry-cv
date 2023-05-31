import React from 'react'

import { StaticImage } from "gatsby-plugin-image"


const About = () => {
    return (
        <div id="pik" className="about-area border-bottom-two three ptb-100">
            <div className="container align-items-center">
                <div className="row align-items-center">

                    <div>
                        <div className="about-content about-content--techforgood">
                            <div className="section-title three">

                                <h2>ProjectInKind</h2>

                                <StaticImage alt="Project in kind logo" src={'../../images/projectinkind.png'} />

                                <p><em>Voluntary CTO</em></p>
                                
                                <p>SMALL THINGS - BIG IMPACT FOR EVERYONE</p>
                                <p>We want to empower the philanthropist and changemaker in everyone. Project In Kind wants to be the world's first in-kind impact movement dedicated to enabling donations of skills, services, and goods locally in support of the United Nations Sustainable Development Goals. </p>

                                <p>Read more about what we’re doing here: <a href="https://www.projectinkind.org/">projectinkind.org</a> </p>

                            </div>

                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About