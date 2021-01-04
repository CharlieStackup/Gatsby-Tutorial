import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Siteheader } from "../components/header"

const IndexPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  return (
    <Layout>
      <SEO title="Home" />
      <Siteheader />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      { edges.map((edge, i) => {
        const { title, excerpt, date, path } = edge.node.frontmatter
        return (
          <div key={i}>
            <Link to={path}>
              <h2>{title}</h2>
            </Link>
            <h3>{date}</h3>
            <p>{excerpt}</p>
          </div>
        )
      })}
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to Using TypeScript</Link>
    </Layout>
  )
}


export const query = graphql`
  query HomePageQuery{
    allMarkdownRemark(
      sort: {order: ASC, fields: [frontmatter___date]}
    ){
      edges{
        node{
          frontmatter {
            title
            path
            date
            excerpt
          }
        }
      }
    }
  }
`

export default IndexPage
