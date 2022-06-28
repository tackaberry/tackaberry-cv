import React from "react"
import Layout from "../components/App/layout"
import SEO from "../components/App/seo"
import Navbar from "../components/DemoThree/Navbar"
import MainBanner from "../components/DemoThree/MainBanner"
import About from "../components/DemoThree/About"
import TopSeven from "../components/DemoThree/TopSeven"
import DayInTheLife from "../components/DemoThree/DayInTheLife"
import ReadingList from "../components/DemoThree/ReadingList"
import TechForGood from "../components/DemoThree/TechForGood"
import ChildNature from "../components/DemoThree/ChildNature"
import ProjectInKind from "../components/DemoThree/ProjectInKind"
import ArticlesPresentations from "../components/DemoThree/ArticlesPresentations"
import Footer from "../components/DemoThree/Footer"

const IndexPage = () => (
    <Layout>
        <div className="body-bg-five">
            <div className="main-area two">
                <Navbar />

                <SEO title="Brett Tackaberry" />
                
                <div className="main-content two">
                    <MainBanner />
                    <About />
                    <TopSeven />
                    <DayInTheLife />
                    <ReadingList />
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