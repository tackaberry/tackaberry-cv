import React from "react"
import Layout from "../components/Layout/Layout"
import Seo from "../components/Layout/Seo"
import Navbar from "../components/Layout/Navbar"
import MainBanner from "../components/Content/MainBanner"
import Carleton from "../components/Content/Carleton"
import About from "../components/Content/About"
import TechForGood from "../components/Content/TechForGood"
import ChildNature from "../components/Content/ChildNature"
import ProjectInKind from "../components/Content/ProjectInKind"
import ArticlesPresentations from "../components/Content/ArticlesPresentations"
import Footer from "../components/Layout/Footer"

const IndexPage = () => (
    <Layout>
        <div className="body-bg-five">
            <div className="main-area two">
                <Navbar page="index" />

                <Seo />
                
                <div className="main-content two">
                    <MainBanner />
                    <Carleton />
                    <About />
                    <TechForGood />
                    <ChildNature />
                    <ProjectInKind />
                    <ArticlesPresentations />

                    <Footer />
                </div>
            </div>
        </div>
    </Layout>
)

export default IndexPage