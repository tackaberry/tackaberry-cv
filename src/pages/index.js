import React from "react"
import Layout from "../components/Layout/layout"
import Seo from "../components/Layout/seo"
import Navbar from "../components/Layout/Navbar"
import MainBanner from "../components/Content/MainBanner"
import About from "../components/Content/About"
import TopSeven from "../components/Content/TopSeven"
import DayInTheLife from "../components/Content/DayInTheLife"
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

                <Seo title="Brett Tackaberry" />
                
                <div className="main-content two">
                    <MainBanner />
                    <About />
                    <TopSeven />
                    <DayInTheLife />
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