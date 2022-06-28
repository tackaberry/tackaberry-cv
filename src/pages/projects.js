import React from "react"
import Layout from "../components/App/layout"
import SEO from "../components/App/seo"
import NavbarProjects from "../components/DemoThree/NavbarProjects"
import Projects from "../components/DemoThree/Projects"
import Footer from "../components/DemoThree/Footer"

const IndexPage = () => (
    <Layout>
        <div className="body-bg-five">
            <div className="main-area two">
                <NavbarProjects />

                <SEO title="Brett Tackaberry" />
                
                <div className="main-content two main-content--projects-main">
                    <div id="career-overview" className="about-area border-bottom-two three ptb-100">
                        <div className="container align-items-center">
                            <div className="row align-items-center">

                            <div>
                                <div className="about-content about-content--projects-nav about-content--techforgood">
                                    <div id="ttt" className="section-title three">
                                <h1>Projects</h1>
                                
                                </div></div></div>
                    
                                </div></div></div>
                    <Projects />

                    <Footer />
                </div>
            </div>
        </div>
    </Layout>
)

export default IndexPage