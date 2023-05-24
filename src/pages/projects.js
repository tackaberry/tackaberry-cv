import React from "react"
import Layout from "../components/Layout/layout"
import Seo from "../components/Layout/seo"
import Navbar from "../components/Layout/Navbar"
import Projects from "../components/Content/Projects"
import Footer from "../components/Layout/Footer"

const IndexPage = () => (
    <Layout>
        <div className="body-bg-five">
            <div className="main-area two">
                <Navbar page="projects" />

                <Seo pageTitle="Projects" />
                
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