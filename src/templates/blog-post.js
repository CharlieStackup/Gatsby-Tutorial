import React from 'react'
import { graphql } from 'gatsby'
import { Siteheader } from '../components/header'


const Template = ({ data, pageContext }) => {
  console.log(pageContext);
  const { markdownRemark } = data
  const title = markdownRemark.frontmatter.title
  const html = markdownRemark.html
  return (
    <div>
      <Siteheader />
      <h1 style={{ fontFamily: 'avenir' }}>{title}</h1>
      <div className="blogpost"
        dangerouslySetInnerHTML={{ __html: html }}
        style={{ fontFamily: 'avenir' }}
      />
    </div>
  )
}

export const query = graphql`
  query($pathSlug: String!){
    markdownRemark( frontmatter: { path: { eq: $pathSlug} }) {
    html
    frontmatter{
      title
    }
  }
}
`

export default Template