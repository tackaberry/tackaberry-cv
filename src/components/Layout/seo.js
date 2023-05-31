/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ pageTitle }) {
  const { site, ogimage } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            url
          }
        }
        ogimage: file(
          absolutePath: { glob: "**/src/images/ogimage.png" }
        ) {
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 1200, formats: [PNG])
          }
        }
      }
    `
  )

  const metaDescription = site.siteMetadata.description
  const defaultTitle = site.siteMetadata.title
  const lang = `en`

  const title = pageTitle ? pageTitle : defaultTitle

  console.log('%cseo.js line:41 ogimage', 'color: #007acc;', ogimage);

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={title}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: `${site.siteMetadata.url}${ogimage.childImageSharp.gatsbyImageData.images.fallback.src}`,
        },
        {
          name: 'og:image:width',
          content: ogimage.childImageSharp.gatsbyImageData.width,
        },
        {
          name: 'og:image:height',
          content: ogimage.childImageSharp.gatsbyImageData.height,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]}
    />
  )
}

SEO.defaultProps = {
  pageTitle: null,
}

SEO.propTypes = {
  pageTitle: PropTypes.string,
}

export default SEO
