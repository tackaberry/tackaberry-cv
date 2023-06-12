import React from "react"
import Layout from "../components/Layout/Layout"
import Seo from "../components/Layout/Seo"
import Navbar from "../components/Layout/Navbar"
import ReadingList from "../components/Content/ReadingList"
import Footer from "../components/Layout/Footer"

const IndexPage = () => (
    <Layout>
        <div className="body-bg-five">
            <div className="main-area two">
                <Navbar page="reading-list" />

                <Seo pageTitle="Brett Tackaberry Reading List" />
                
                <div className="main-content two">
                    <ReadingList />

                    <Footer />
                </div>
            </div>
        </div>
    </Layout>
)

export default IndexPage