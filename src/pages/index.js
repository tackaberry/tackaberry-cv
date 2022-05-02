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
import ArticlesPresentations from "../components/DemoThree/ArticlesPresentations"
import Services from "../components/DemoThree/Services"
import Experience from "../components/DemoThree/Experience"
import Skills from "../components/DemoThree/Skills"
import Projects from "../components/DemoThree/Projects"
import BlogPost from "../components/DemoThree/BlogPost"
import Testimonials from "../components/DemoThree/Testimonials"
import ContactForm from "../components/DemoThree/ContactForm"
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
                    <ArticlesPresentations />
                    <Skills />

                    <Footer />
                </div>
            </div>
        </div>
    </Layout>
)

export default IndexPage