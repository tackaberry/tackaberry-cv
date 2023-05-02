import React from "react"
import Layout from "../components/Layout/layout"
import Seo from "../components/Layout/seo"
import Navbar from "../components/Layout/NavbarReading"
import ReadingList from "../components/Content/ReadingList"
import Footer from "../components/Layout/Footer"

const IndexPage = () => (
    <Layout>
        <div className="body-bg-five">
            <div className="main-area two">
                <Navbar />

                <Seo title="Brett Tackaberry Reading List" />
                
                <div className="main-content two">
                    <ReadingList />

                    <Footer />
                </div>
            </div>
        </div>
    </Layout>
)

export default IndexPage