import React from 'react'
import GoodreadsBookshelf from "react-goodreads-shelf";

const About = () => {
    return (
        <div id="reading" className="about-area border-bottom-two three ptb-100">
            <div className="container align-items-center">
                <div className="row align-items-center">

                    <div>
                        <div className="about-content about-content--reading">
                            <div className="section-title three">

                                <span className="sub-title">Reading List</span>
                                <div className="row">

                                <GoodreadsBookshelf 
                                    userId="6959336-brett-tackaberry" 
                                    shelf="reading-list"
                                    limit="50" 
                                />

                                </div>
                            </div>

                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About