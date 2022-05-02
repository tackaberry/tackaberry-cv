import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const CvTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`

  const [sidebar, main] = post.html.split("<hr>")

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
        <div className="row">
         <div className="column">
            <section
              dangerouslySetInnerHTML={{ __html: main }}
              itemProp="articleBody"
              className="main-column"
            />
          </div>
          <div className="column">
            <section 
              dangerouslySetInnerHTML={{ __html: sidebar }}
              className="sidebar-column"
            />
          </div>
        </div>
     
    </Layout>
  )
}

export default CvTemplate

export const pageQuery = graphql`
  query CvBySlug(
    $id: String!
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
