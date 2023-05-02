import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

const About = () => {
    return (
        <div id="cnac" className="about-area border-bottom-two three ptb-100">
            <div className="container align-items-center">
                <div className="row align-items-center">

                    <div>
                        <div className="about-content about-content--techforgood">
                            <div className="section-title three">

                                <h2>Child Nature Alliance of Canada</h2>

                                <StaticImage alt="Screenshot of website" src={'./images/childnature.png'} />

                                <p><em>Board member - 2016 - Present</em></p>
                                
                                <p>As a board we've guided the organization through growth from a Forest School on Wesley Clover Parks into the Forest School Canada movement training and empowering Forest School practitioners across Canada.  My relationship with CNAC started as a Forest School parent, taking my kids out of school for a day each week and sending them to Forest school,  and I quickly fell in love with what they're trying to do.  To build the next generation of stewards of the land, and the engineers that are going to fix our environment, you need to foster, as children, a deep connection and relationship with the land.</p>

                                <p>Read more about what they're doing here: <a href="https://childnature.ca/">childnature.ca</a> </p>

                            </div>

                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About