import React from "react"

import Layout from "../components/Layout/Layout"
import Seo from "../components/Layout/Seo"

const NotFoundPage = () => (
  <Layout>
    <Seo pageTitle="404: Not found" />
    <h1>404: Not Found</h1>
    <p>It'll be ok, we can find it together.</p>
  </Layout>
)

export default NotFoundPage
